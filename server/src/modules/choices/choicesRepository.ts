import databaseClient from "../../../database/client";

import type { Result } from "../../../database/client";

type Choices = {
  id: number;
  text: string;
  episodes_source_id: number;
  episodes_target_id: number;
};

class ChoicesRepository {
  // The C of CRUD - Create operation
  async create(choices: Omit<Choices, "id">) {
    const [choice] = await databaseClient.query<Result>(
      `
        INSERT INTO 
            choices (text, episodes_source_id, episodes_target_id) 
        VALUES 
            (?, ?, ?)
        `,
      [choices.text, choices.episodes_source_id, choices.episodes_target_id],
    );
    return choice.insertId;
  }
}

export default new ChoicesRepository();
