import argon2 from "argon2";
import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Client = {
  id: number;
  email: string;
  password: string;
};

class ClientRepository {
  // The C of CRUD - Create operation
  async create(client: Omit<Client, "id">) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();

      const hashedPassword = await argon2.hash(client.password);

      const [users] = await connection.query<Result>(
        `
            INSERT INTO  
                users (email, password, hashed_password)
            VALUES 
                (?, ?, ?)
          `,
          [client.email, hashedPassword, hashedPassword],
      );

      if (!users.insertId) {
        throw new Error("fail insert into user table");
      }

      const [clientResult] = await connection.query<Result>(
        `
            INSERT INTO
            clients (users_id)
            VALUES
            (?)
            `,
        [users.insertId],
      );

      if (!clientResult.insertId) {
        throw new Error("fail insert into client table");
      }
      connection.commit();
      return clientResult.insertId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release;
    }
  }
  // The R of CRUD - Read operations
  async read(id: number): Promise<Client | null> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT email
      FROM users
      INNER JOIN clients ON clients.users_id = users.id
     WHERE clients.id = ?`,
      [id],
    );
    return rows[0] as Client;
  }

  async readAll(): Promise<Client[]> {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT email FROM users INNER JOIN clients ON clients.users_id = users.id",
    );
    return rows as Client[];
  }

  async findByEmail(email: string): Promise<Client | null> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT users.id, users.email, users.password, clients.id as client_id
       FROM users
       INNER JOIN clients ON clients.users_id = users.id
       WHERE users.email = ?`,
      [email]
    );
    
    if (!rows[0]) return null;
    
    return {
      id: rows[0].client_id,
      email: rows[0].email,
      password: rows[0].password
    } as Client;
  }

  // The U of CRUD - Update operation
  async update(clients: Client) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE users u
        JOIN clients c ON c.users_id = u.id
        SET 
            u.email = ?,
            u.password = ?
        WHERE 
            c.id = ?
      `,
      [clients.email, await argon2.hash(clients.password), clients.id]
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number): Promise<boolean> {
    const [result] = await databaseClient.query<Result>(
      `
        DELETE FROM users
        WHERE id = (SELECT users_id FROM clients WHERE id = ?)
        `,
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new ClientRepository();
