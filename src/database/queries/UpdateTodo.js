export const updateTodo = async (db, id, title, description, isCompleted) => {
  const success = await db.execute(
    'UPDATE todos SET title = ?, description = ?, isCompleted = ? WHERE id = ?',
    [title, description, isCompleted, id],
  );
  return success;
};
