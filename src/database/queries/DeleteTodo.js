export const deleteTodo = async (db, id) => {
  db.execute('DELETE FROM todos WHERE id = ?', [id]);
};
