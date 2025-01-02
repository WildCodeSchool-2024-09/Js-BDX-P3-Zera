import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";
import episodesRepository from "../episodes/episodesRepository";

type Paragraph = {
  id: number;
  content: string;
  episodes_id: number;
};

class ParagraphRepository {
  // The C of CRUD - Create operation

  async create(paragraph: Omit<Paragraph, "id">) {
    // Execute the SQL INSERT query to add a new paragraph to the "paragraph" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO paragraphs 
            (resume, illu, contains_id) 
        VALUES 
            (?, ?, ?)
        `,
      [paragraph.content, paragraph.episodes_id],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Paragraph where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Paragraph;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from paragraphs");

    // Return the array of Books
    return rows as Paragraph[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(paragraph: Paragraph) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE paragraphs,
        SET content = ?, episodes_id = ?
        WHERE id = ? 
        `,
      [paragraph.content, paragraph.episodes_id, paragraph.id],
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ParagraphRepository();
