import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Episode = {
  id: number;
  is_free: boolean;
  to_register: boolean;
  books_id: number;
  contains_id: number;
};

class EpisodeRepository {
  // The C of CRUD - Create operation

  async create(episode: Omit<Episode, "id">) {
    // Execute the SQL INSERT query to add a new episode to the "episode" table
    const [result] = await databaseClient.query<Result>(
      `
        INSERT INTO episodes 
            (is_free, to_register, books_id, contains_id) 
        VALUES 
            (?, ?, ?,?)
        `,
      [
        episode.is_free,
        episode.to_register,
        episode.books_id,
        episode.contains_id,
      ],
    );

    // Return the ID of the newly inserted episode
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific episode by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from Episode where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the Book
    return rows[0] as Episode;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>("select * from books");

    // Return the array of Books
    return rows as Episode[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  /*   async update(episode: Episode) {
    const updatedRows = await databaseClient.query<Rows>(
      `
        UPDATE episodes,
        SET resume = ?, illu = ?, contains_id = ?
        WHERE id = ? 
        `,
      [episode.resume, episode.illu, episode.contains_id, episode.id],
    );
  } */

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an Book by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new EpisodeRepository();
