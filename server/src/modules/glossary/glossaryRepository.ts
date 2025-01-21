import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

type Glossary = {
  id: number;
  title: string;
  definition: string;
};

class GlossaryRepository {
  // The C of CRUD - Create operation
  async create(glossary: Omit<Glossary, "id">) {
    const [createGlossary] = await databaseClient.query<Result>(
      `
            INSERT INTO  
                glossary (title, definition)
            VALUES 
                (?,?)
          `,
      [glossary.title, glossary.definition],
    );
    return createGlossary.insertId;
  }
  // The Rs of CRUD - Read operations
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT title, definition
      FROM glossary 
     WHERE glossary.id = ?`,
      [id],
    );
    return rows[0] as Glossary;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM glossary");
    return rows as Glossary[];
  }

  async update(glossary: Glossary) {
    const [result] = await databaseClient.query<Result>(
      `
        UPDATE glossary 
        SET title = ?, definition = ? 
        WHERE id = ?
      `,
      [glossary.title, glossary.definition, glossary.id],
    );
    return result.affectedRows > 0;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    console.info(id);
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM glossary 
        WHERE id = ?`,
      [id],
    );
    return result.affectedRows > 0;
  }
}

export default new GlossaryRepository();
