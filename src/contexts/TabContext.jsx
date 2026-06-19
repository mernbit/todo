import { createContext, useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import { initDb } from '../database';
import { getAllTodos } from '../database/queries/GetAll';
import { updateTodo } from '../database/queries/UpdateTodo';

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [db, setDb] = useState(null);
  const [status, setStatus] = useState('all');
  const [checked, setChecked] = useState({});
  const setup = async () => {
    try {
      const database = await initDb();
      setDb(database);
      const todosData = await getAllTodos(database);
      console.log(todosData);
      setTodos(todosData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setup();
  }, []);
  const onCheck = async (id, title, description, status) => {
    if (!db) return;
    const newChecked = !checked[id];
    setChecked(prev => ({ ...prev, [id]: newChecked }));
    console.log('Function Stage 1');
    if (newChecked) {
      updateTodo(db, id, title, description, status);
      console.log('Function Stage 2');
      setup();
    }
  };
  return (
    <TabContext.Provider
      value={{
        db,
        setup,
        todos,
        status,
        setStatus,
        onCheck,
        checked,
        setChecked,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;

// const styles = StyleSheet.create({});
