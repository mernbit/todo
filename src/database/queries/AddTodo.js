import uuid from 'react-native-uuid';

export const addTodo = async (db, title, description) => {
  const id = uuid.v4();
  console.log(db);
  try {
    await db.execute(
      'INSERT INTO todos(id, title, description, isCompleted) VALUES (?, ?, ?, ?)',
      [id, title, description, 0],
    );
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
