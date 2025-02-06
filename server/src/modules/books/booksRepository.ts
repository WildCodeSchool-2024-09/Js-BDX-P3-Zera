import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Books = {
  id: number;
  title: string;
  resume: string;
  illustration: string;
};
class BooksRepository {
  // The C of CRUD - Create operation
  async create(books: Omit<Books, "id">) {
    const [book] = await databaseClient.query<Result>(
      `
        INSERT INTO 
            books (title, resume, illustration) 
        VALUES 
            (?, ?, ?)
        `,
      [books.title, books.resume, books.illustration],
    );
    return book.insertId;
  }
  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from books where id = ?",
      [id],
    );
    return rows[0] as Books;
  }

  // Return the first row of the result, which represents the Book
  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>(
      `select
        books.*,
        JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', episodes.id,
            'title', episodes.title,
            'choices', (
              select JSON_ARRAYAGG(
                JSON_OBJECT(
                  'id', id
                )
              )
              from choices where episodes_source_id = episodes.id
              group by episodes_source_id
            )
          )
        ) AS episodes
      from books
      join episodes on books.id = episodes.books_id
      group by books_id
    `,
    );

    // Return the array of Books
    return rows as Books[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(books: Books) {
    try {
      const [result] = await databaseClient.query<Result>(
        `
        UPDATE books
        SET title = ?, resume = ?, illustration = ?
        WHERE id = ?
        `,
        [books.title, books.resume, books.illustration, books.id],
      );
      return result.affectedRows;
    } catch (err) {
      console.error("Error updating contain with ID", books.id, err);
      throw err;
    }
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID
  async delete(id: number) {
    try {
      const [result] = await databaseClient.query<Result>(
        `
        DELETE FROM books
        WHERE id = ?
        `,
        [id],
      );
      return result.affectedRows;
    } catch (error) {
      console.error(`Error deleting book with ID ${id}:`, error);
      throw error;
    }
  }
}

export default new BooksRepository();
