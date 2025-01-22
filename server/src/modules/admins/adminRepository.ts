import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Admin = {
  id: number;
  email: string;
  password: string;
};

class AdminRepository {
  // The C of CRUD - Create operation
  async create(admin: Omit<Admin, "id">) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();
      const [user] = await connection.query<Result>(
        `
            INSERT INTO  
                users (email,password)
            VALUES 
                (?,?)
          `,
        [admin.email, admin.password],
      );

      if (!user.insertId) {
        throw new Error("fail insert into user table");
      }

      const [adminResult] = await connection.query<Result>(
        `
            INSERT INTO
            admins (users_id)
            VALUES
            (?)
            `,
        [user.insertId],
      );

      if (!adminResult.insertId) {
        throw new Error("fail insert into admin table");
      }
      connection.commit();
      return adminResult.insertId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release;
    }
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT email
      FROM users 
      INNER JOIN admins ON admins.users_id = users.id
     WHERE admins.id = ?`,
      [id],
    );
    return rows[0] as Admin;
  }

  async readAll(): Promise<Admin[]> {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        email 
      FROM users 
      INNER JOIN clients ON clients.users_id = users.id`,
    );
    return rows as Admin[];
  }

  // The U of CRUD - Update operation
  async update(admin: Admin) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE users 
        SET email = ? , password = ? 
        WHERE id = (
            SELECT users_id
            FROM admins
            WHERE id = ?
        )
      `,
      [admin.email, admin.id],
    );
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    console.info(id);
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM users 
        WHERE id = (
            SELECT users_id
            FROM admins
            WHERE id = ?)`,
      [id],
    );
    return result.affectedRows;
  }
}

export default new AdminRepository();
