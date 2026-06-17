export const getAllTodos = async db => {
  try {
    const { rows } = await db.execute(
      'SELECT * FROM todos ORDER BY createdAt DESC',
    );
    return rows;
  } catch (error) {
    console.log(error);
    return [];
  }
};
