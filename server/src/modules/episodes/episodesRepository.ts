import { ne } from "@faker-js/faker/.";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Episode = {
  id: number;
  title: string;
  to_register: boolean;
  type: string;
  books_id: number;
  is_free: boolean;
  paragraphs: string[];
  illustrations: string;
};

class EpisodeRepository {
  // The C of CRUD - Create operation

  async create(episodeContent: Omit<Episode, "id">) {
    // Execute the SQL INSERT query to add a new episode to the "episode" table
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();
      const [episode] = await connection.query<Result>(
        `
        INSERT INTO episodes
          (title,to_register,type,books_id,is_free)
        VALUES
          (?,?,?,?,?)
        `,
        [
          episodeContent.title,
          episodeContent.to_register,
          episodeContent.type,
          episodeContent.books_id,
          episodeContent.is_free,
        ],
      );
      const episodeId = episode.insertId;
      if (!episodeId) {
        throw new Error("Failed insertion in episodes table");
      }
      episodeContent.paragraphs.map(async (p) => {
        const [paragraphs] = await connection.query<Result>(
          `
          INSERT INTO paragraphs
            (content, episodes_id)
          VALUES
            (?,?)
          `,
          [p, episodeId],
        );
        if (!paragraphs.insertId) {
          throw new Error("Failed insertion in paragraphs table");
        }
      });

      const [illustrations] = await connection.query<Result>(
        `
        INSERT INTO illustrations
          (url, episodes_id)
        VALUES 
          (?,?)
        `,
        [episodeContent.illustrations, episodeId],
      );
      if (!illustrations.insertId) {
        throw new Error("Failed insertion in illustrations table");
      }
      await connection.commit();
      return episodeId;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query with specific columns and aliases
    const [rows] = await databaseClient.query<Rows>(
      `
SELECT 
    e.id AS episode_id,
    e.title,
    e.to_register,
    e.type,
    e.books_id,
    e.is_free,
    i.url AS illustration_url,
    CONCAT('[', GROUP_CONCAT(
        JSON_OBJECT(
            'paragraph_id', p.id,
            'paragraph_content', p.content
        )
    ), ']') AS paragraphs
FROM 
    episodes e
LEFT JOIN 
    illustrations i ON e.id = i.episodes_id
LEFT JOIN 
    paragraphs p ON e.id = p.episodes_id
WHERE 
    e.id = 4
GROUP BY 
    e.id, e.title, e.to_register, e.type, e.books_id, e.is_free, i.url;

      `,
      [id],
    );
    return rows;
  }

  async readAll(id: number) {
    // Execute the SQL SELECT query to retrieve all Books from the "Book" table
    const [rows] = await databaseClient.query<Rows>(
      `
SELECT 
    e.id AS episode_id,
    e.title,
    e.to_register,
    e.type,
    e.books_id,
    e.is_free,
    i.url AS illustration_url,
    JSON_ARRAYAGG(
        JSON_OBJECT(
            'paragraph_id', p.id,
            'paragraph_content', p.content
        )
    ) AS paragraphs
FROM 
    episodes e
INNER JOIN 
    illustrations i ON e.id = i.episodes_id
INNER JOIN 
    paragraphs p ON e.id = p.episodes_id
WHERE 
    e.books_id = ?
GROUP BY 
    e.id, e.title, e.to_register, e.type, e.books_id, e.is_free, i.url;

      `,
      [id],
    );

    return rows as Episode[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing Book

  async update(episodeContent: Episode) {
    const connection = await databaseClient.getConnection();
    try {
      await connection.beginTransaction();

      // Update episodes
      const [episode] = await connection.query<Result>(
        `
        UPDATE episodes
        SET title = ?, to_register = ?, type = ?, books_id = ?, is_free = ?  
        WHERE id = ? 
        `,
        [
          episodeContent.title,
          episodeContent.to_register,
          episodeContent.type,
          episodeContent.books_id,
          episodeContent.is_free,
          episodeContent.id,
        ],
      );
      if (!episode.affectedRows) {
        throw new Error("Failed update in episodes table");
      }

      // Update illustrations
      const [illustrations] = await connection.query<Result>(
        `
        UPDATE illustrations
        SET url = ?
        WHERE episodes_id = ?
        `,
        [episodeContent.illustrations, episodeContent.id],
      );
      if (!illustrations.affectedRows) {
        throw new Error("No rows updated in illustrations table");
      }

      // Delete paragraphs
      const [deletedParagraph] = await connection.query<Result>(
        `
        DELETE FROM paragraphs
        WHERE episodes_id = ? 
        `,
        [episodeContent.id],
      );

      // Insert new paragraphs
      await Promise.all(
        episodeContent.paragraphs.map(async (p) => {
          const [paragraphs] = await connection.query<Result>(
            `
            INSERT INTO paragraphs
              (content, episodes_id)
            VALUES
              (?, ?)
            `,
            [p, episodeContent.id],
          );
          if (!paragraphs.insertId) {
            throw new Error("Failed insertion in paragraphs table");
          }
        }),
      );

      await connection.commit();
      return true;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  }

  async delete(id: number) {
    console.info(id);
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM episodes 
        WHERE id = ?`,
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new EpisodeRepository();
