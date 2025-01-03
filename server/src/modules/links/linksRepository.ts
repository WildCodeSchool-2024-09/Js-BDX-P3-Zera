import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Link = {
  id: number;
  text: string;
  path: string;
};

class LinkRepository {
  // The C of CRUD - Create operation

  async create(link: Omit<Link, "id">) {
    // Execute the SQL INSERT query to add a new link to the "link" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO links 
            (text, path,) 
        VALUES 
            (?, ?)
        `,
      [link.text, link.path],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Link where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Link;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from links");

    // Return the array of Books
    return rows as Link[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(link: Link) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE books,
        SET text = ?, path = ?,
        WHERE id = ? 
        `,
      [link.text, link.path],
    );
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new LinkRepository();
