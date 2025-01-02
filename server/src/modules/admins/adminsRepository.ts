import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Admin = {
  id: number;
  register_id: number;
};

class AdminsRepository {
  // The C of CRUD - Create operation

  async create(admin: Omit<Admin, "id">) {
    // Execute the SQL INSERT query to add a new admin to the "admin" table
    const [result] = await databaseClient.query<Result>(
    `
        INSERT INTO admin 
            (register_id) 
        VALUES 
            (?)
       `,
      [admin.register_id],
    );

    // Return the ID of the newly inserted admin
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific admin by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Admin where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the admins
    return rows[0] as Admin;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all adminss from the "admins" table
    const [rows] = await databaseClient.query<Rows>("select * from admins");

    // Return the array of admins
    return rows as Admin[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing admins

  // async update(admins: admins) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an admins by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new AdminsRepository();
