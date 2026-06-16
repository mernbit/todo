import { createContext, useContext, useState } from 'react';
import { View } from 'react-native';

const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('repairs');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => useContext(TabContext);

export default TabProvider;

// const styles = StyleSheet.create({});
