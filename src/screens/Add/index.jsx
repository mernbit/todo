import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Divider, Text } from 'react-native-paper';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import Form from './Form';
import { addTodo } from '../../database/queries/AddTodo';
import { initDb } from '../../database';
import { useTabContext } from '../../contexts/TabContext';
import Toast from 'react-native-toast-message';
const Add = ({ navigation }) => {
  // const db = initDb();
  const [db, setDb] = useState(null);
  const { setup: refreshTodos } = useTabContext();
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  const setup = async () => {
    const database = await initDb();
    setDb(database);
  };
  useEffect(() => {
    setup();
  }, []);
  const onSave = async () => {
    if (!db) return;
    const success = await addTodo(db, todo.title, todo.description);
    if (success) {
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Todo saved successfully!',
      });
      refreshTodos();
      navigation.goBack();
    } else {
      Toast.show({
        type: 'error',
        text1: 'Failed to save todo!',
      });
    }
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ paddingHorizontal: 18, flex: 1 }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <EvilIcons
            onPress={() => {
              navigation.goBack();
            }}
            name="chevron-left"
            size={45}
            color="black"
          />
          <Text style={{ fontWeight: 'semibold' }} variant="headlineLarge">
            Add Todo
          </Text>
        </View>
        <Button
          mode="contained"
          style={styles.save}
          labelStyle={{ color: 'white' }}
          disabled={!todo.title || !todo.description}
          onPress={onSave}
        >
          Save
        </Button>
      </View>
      <Divider style={{ marginVertical: 22 }} />
      <View>
        <Form setData={setTodo} />
      </View>
    </ScrollView>
  );
};

export default Add;

const styles = StyleSheet.create({
  save: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
