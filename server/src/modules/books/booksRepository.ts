import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Book = {
  id: number;
  resume: string;
  illu: string;
  contains_id: number;
};

class BookRepository {
  // The C of CRUD - Create operation

  async create(book: Omit<Book, "id">) {
    // Execute the SQL INSERT query to add a new Book to the "Book" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO books 
            (resume, illu, contains_id) 
        VALUES 
            (?, ?, ?)
        `,
      [book.resume, book.illu, book.contains_id],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Book where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Book;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from books");

    // Return the array of Books
    return rows as Book[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(book: Book) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE books,
        SET resume = ?, illu = ?, contains_id = ?
        WHERE id = ? 
        `,
      [book.resume, book.illu, book.contains_id, book.id],
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new BookRepository();
