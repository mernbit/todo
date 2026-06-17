// import { open } from '@op-engineering/op-sqlite';

// export const db = open({
//   name: 'todo.db',
//   location: 'default',
// });
// export const todoDb = open({
//   name: 'todo.db',
//   location: 'default',
//   encryptionKey: import.meta.env.ENCRYPTION_KEY,
// });

import { open } from '@op-engineering/op-sqlite';

let db = null;

export const initDb = async () => {
  try {
    if (!db) {
      db = open({
        name: 'todo.db',
      });
      await db.execute(
        `CREATE TABLE IF NOT EXISTS todos(
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT,
        isCompleted INTEGER DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )`,
      );
    }
    return db;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// export const todos = initDb();
