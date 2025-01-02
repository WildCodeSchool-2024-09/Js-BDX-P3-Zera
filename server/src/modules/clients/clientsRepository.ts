import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Client = {
  id: number;
  registers_id: number;
};

class ClientRepository {
  // The C of CRUD - Create operation

  async create(client: Omit<Client, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      `
      INSERT INTO admin 
          (register_id) 
      VALUES 
          (?)
     `,
      [client.registers_id],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Client where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as Client;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from clients");

    // Return the array of items
    return rows as Client[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new ClientRepository();
