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
      const [users] = await connection.query<Result>(
        `
            INSERT INTO  
                users (email, password)
            VALUES 
                (?, ?)
          `,
        [client.email, client.password],
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
    const [rows] = await databaseClient.query<Rows>("SELECT email FROM users");
    return rows as Client[];
  }

  // The U of CRUD - Update operation
  async update(clients: Client) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE users
        SET 
            email = ?
        WHERE 
            id = (SELECT users_id FROM clients WHERE id = ?)
        `,
      [clients.email, clients.id],
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
