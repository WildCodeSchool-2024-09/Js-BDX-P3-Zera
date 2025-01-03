import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Save = {
  id: number;
  date: number;
  episodes_id: number;
  clients_id: number;
};

class SaveRepository {
  // The C of CRUD - Create operation

  async create(save: Omit<Save, "id">) {
    // Execute the SQL INSERT query to add a new save to the "save" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO saves 
            (date, episodes_id, clients_id) 
        VALUES 
            (?, ?, ?)
        `,
      [save.date, save.episodes_id, save.clients_id],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Save where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Save;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from saves");

    // Return the array of Books
    return rows as Save[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(save: Save) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE saves,
        SET date = ?, episodes_id = ?, clients_id = ?
        WHERE id = ? 
        `,
      [save.date, save.episodes_id, save.clients_id, save.id],
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new SaveRepository();
