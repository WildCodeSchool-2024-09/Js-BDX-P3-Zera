import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Illu = {
  id: number;
  url: string;
  episodes_id: number;
};

class IlluRepository {
  // The C of CRUD - Create operation

  async create(illu: Omit<Illu, "id">) {
    // Execute the SQL INSERT query to add a new illu to the "illu" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO illus 
            (resume, illu, contains_id) 
        VALUES 
            (?, ?, ?)
        `,
      [illu.url, illu.episodes_id],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Illu where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Illu;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from books");

    // Return the array of Books
    return rows as Illu[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(illu: Illu) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE illus,
        SET resume = ?, illu = ?, contains_id = ?
        WHERE id = ? 
        `,
      [illu.url, illu.episodes_id, illu.id],
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new IlluRepository();
