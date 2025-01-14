import { U } from "@faker-js/faker/dist/airline-C5Qwd7_q";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  email: string;
  password: string;
};

class UserRepository {
  // The C of CRUD - Create operation
  async create(user: Omit<User, "id">) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();

      // Insert user into the users table
      const [us] = await connection.query<Result>(
        `
          INSERT INTO users (email, password)
          VALUES (?, ?)
        `,
        [user.email, user.password],
      );

      if (!us.insertId) {
        throw new Error("Failed to insert into users table (email, password).");
      }

      // Commit the transaction
      await connection.commit();
      return us.insertId; // Retourne l'ID de l'utilisateur créé
    } catch (error) {
      // Rollback transaction on error
      await connection.rollback();
      console.error("Error during user creation:", error);
      throw error;
    } finally {
      // Ensure the connection is released
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT email
      FROM users 
     WHERE id = ?`,
      [id],
    );
    return rows[0] as User;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM users");
    return rows as User[];
  }

  // The U of CRUD - Update operation
  async update(user: User) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE users 
        SET email = ? 
        WHERE id = ?
      `,
      [user.email, user.id],
    );
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    console.info(id);
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM users 
        WHERE id = ?`,
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new UserRepository();
