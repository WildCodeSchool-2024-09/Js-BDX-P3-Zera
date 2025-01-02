import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Contain = {
  id: number;
  name: string;
};

class ContainRepository {
  // The C of CRUD - Create operation

  async create(contain: Omit<Contain, "id">) {
    // Execute the SQL INSERT query to add a new contain to the "contain" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO contains 
            (name) 
        VALUES 
            (?)
        `,
      [contain.name],
    );

    // Return the ID of the newly inserted Book
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific Book by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Contain where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Contain;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from contains");

    // Return the array of Books
    return rows as Contain[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

/*   async update(contain: Contain) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE books,
        SET resume = ?, illu = ?, contains_id = ?
        WHERE id = ? 
        `,
      [contain.name],
    );
  } */

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ContainRepository();
