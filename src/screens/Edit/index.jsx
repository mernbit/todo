import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button, Divider, Text } from 'react-native-paper';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import Form from './Form';
import { updateTodo } from '../../database/queries/UpdateTodo';
import { getSingle } from '../../database/queries/GetSingle';
import { useTabContext } from '../../contexts/TabContext';
import Toast from 'react-native-toast-message';
const Edit = ({ navigation, route }) => {
  const { setup: refreshTodos, db } = useTabContext();
  const { todoId } = route.params;
  const [todo, setTodo] = useState({});
  const setup = async () => {
    const data = await getSingle(db, todoId);
    setTodo(data);
  };
  useEffect(() => {
    setup();
  }, []);
  const onSave = async () => {
    if (!db) return;
    if (todo?.isCompleted == 1)
      return Alert.alert('Todo is Completed', 'You cannot edit completed todo');
    const success = await updateTodo(
      db,
      todoId,
      todo.title,
      todo.description,
      0,
    );
    if (success) {
      refreshTodos();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Todo Updated Successfully',
      });
      navigation.goBack();
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
              navigation.goBack();
            }}
            name="chevron-left"
            size={45}
            color="black"
          />
          <Text style={{ fontWeight: 'semibold' }} variant="headlineLarge">
            Edit Todo
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
        <Form todo={todo} setData={setTodo} />
      </View>
    </ScrollView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  save: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
