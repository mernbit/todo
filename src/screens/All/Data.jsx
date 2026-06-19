import {
  Alert,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { Checkbox, Chip, Divider, Text } from 'react-native-paper';
import { deleteTodo } from '../../database/queries/DeleteTodo';
import EvilIcons from '@react-native-vector-icons/evil-icons';
import { useTabContext } from '../../contexts/TabContext';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
const Data = ({ navigation }) => {
  const { db, todos, setup, status, setStatus, onCheck, checked, setChecked } =
    useTabContext();

  useEffect(() => {
    setup();
  }, [db, status]);
  const onDelete = async id => {
    if (!db) return;
    deleteTodo(db, id);
    setup();
  };

  const filterTodos = (todos, status) => {
    if (status === 'all') {
      return todos;
    }
    if (status === 'incomplete') {
      return todos.filter(t => t.isCompleted == 0);
    }
    return todos.filter(t => t.isCompleted == 1);
  };
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          marginBottom: 16,
        }}
      >
        <Chip
          icon={() => (
            <MaterialDesignIcons
              name="format-list-bulleted"
              size={20}
              color={status == 'all' ? 'white' : 'black'}
            />
          )}
          style={
            status == 'all'
              ? { backgroundColor: 'black' }
              : {
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'gray',
                }
          }
          onPress={() => setStatus('all')}
        >
          <Text style={{ color: status == 'all' ? 'white' : 'black' }}>
            All
          </Text>
        </Chip>
        <Chip
          icon={() => (
            <MaterialDesignIcons
              name="information-outline"
              size={20}
              color={status == 'incomplete' ? 'white' : 'black'}
            />
          )}
          style={
            status == 'incomplete'
              ? { backgroundColor: 'black' }
              : {
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'gray',
                }
          }
          onPress={() => setStatus('incomplete')}
        >
          <Text style={{ color: status == 'incomplete' ? 'white' : 'black' }}>
            Incomplete
          </Text>
        </Chip>
        <Chip
          icon={() => (
            <MaterialDesignIcons
              name="check-circle-outline"
              size={20}
              color={status == 'complete' ? 'white' : 'black'}
            />
          )}
          style={
            status == 'complete'
              ? { backgroundColor: 'black' }
              : {
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderColor: 'gray',
                }
          }
          onPress={() => setStatus('complete')}
        >
          <Text style={{ color: status == 'complete' ? 'white' : 'black' }}>
            Completed
          </Text>
        </Chip>
      </View>
      {filterTodos(todos, status)?.map(t => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Edit', { todoId: t.id })}
          key={t.id}
          activeOpacity={0.5}
          style={styles.card}
        >
          <View style={styles.cardData}>
            <View>
              <Text variant="headlineSmall">{t.title}</Text>
              <Text variant="titleSmall">
                {new Date(t.createdAt).toLocaleString()}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <EvilIcons
                name="trash"
                size={24}
                color="red"
                onPress={() => onDelete(t.id)}
              />
              <Checkbox
                color="black"
                disabled={status == 'complete'}
                status={
                  checked[t.id] || t.isCompleted ? 'checked' : 'unchecked'
                }
                onPress={() => onCheck(t.id, t.title, t.description, 1)}
              />
            </View>
          </View>
          <Divider />
          <View style={styles.cardDescription}>
            <Text>{t.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Data;

const styles = StyleSheet.create({
  cardData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    padding: 16,
    marginVertical: 8,
    borderWidth: 1,
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  cardDescription: {
    backgroundColor: '#dcdcdc',
    marginTop: 12,
    padding: 10,
    borderRadius: 6,
  },
});
