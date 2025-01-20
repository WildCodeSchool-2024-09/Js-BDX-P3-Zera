import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Glossary = {
  id: number;
  title: string;
  definition: string;
};
class ChoicesRepository {
  // The C of CRUD - Create operation
  async create(glossarys: Omit<Glossary, "id">) {
    const [glossary] = await databaseClient.query<Result>(
      `
        INSERT INTO 
            glossary (title, definition) 
        VALUES 
            (?, ?)
        `,
      [glossarys.title, glossarys.definition],
    );
    return glossary.insertId;
  }
  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from glossary where id = ?",
      [id],
    );
    return rows[0] as Glossary;
  }

  // Return the first row of the result, which represents the Book
  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from glossary");

    // Return the array of Books
    return rows as Glossary[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(glossary: Glossary) {
    try {
      const [result] = await databaseClient.query<Result>(
        `
        UPDATE glossary
        SET title = ?, definition = ?
        WHERE id = ?
        `,
        [glossary.title, glossary.definition, glossary.id],
      );
      return result.affectedRows;
    } catch (err) {
      console.error("Error updating contain with ID", glossary.id, err);
      throw err;
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID
  async delete(id: number) {
    try {
      const [result] = await databaseClient.query<Result>(
        `
        DELETE FROM glossary
        WHERE id = ?
        `,
        [id],
      );
      return result.affectedRows;
    } catch (error) {
      console.error(`Error deleting glossary with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new ChoicesRepository();
