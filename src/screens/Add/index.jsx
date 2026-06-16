import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Divider, Text } from 'react-native-paper';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import Form from './Form';
import { addTodo } from '../../database/queries/AddTodo';
import { initDb } from '../../database';
const Add = ({ navigation }) => {
  // const db = initDb();
  const [db, setDb] = useState(null);
  const [todo, setTodo] = useState({
    title: '',
    description: '',
  });
  useEffect(() => {
    const setup = async () => {
      const database = await initDb();
      setDb(database);
    };
    setup();
  }, []);

  const onSave = async () => {
    if (!db) return;
    const success = await addTodo(db, todo.title, todo.description);
    if (success) {
      navigation.navigate('All');
    }
  };
  return (
    <ScrollView style={{ paddingHorizontal: 18, flex: 1 }}>
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
              navigation.navigate('All');
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
