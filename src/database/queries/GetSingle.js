export const getSingle = async (db, id) => {
  try {
    const { rows } = await db.execute('SELECT * FROM todos WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    console.log(error);
    return [];
  }
};
