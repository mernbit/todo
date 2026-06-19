import {
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Divider, IconButton, Text } from 'react-native-paper';
import Data from './Data';
import { FontAwesomeFreeSolid } from '@react-native-vector-icons/fontawesome-free-solid';
const AllTodos = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 18, flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.heading}>
          <Text variant="headlineLarge" style={{ fontWeight: 'semibold' }}>
            All Todos
          </Text>

          <TouchableOpacity activeOpacity={0.5}>
            <IconButton
              contentStyle={{ margin: 0, padding: 0 }}
              mode="contained"
              style={styles.add}
              onPress={() => {
                navigation.navigate('Add');
              }}
              icon={() => (
                <FontAwesomeFreeSolid name="plus" size={20} color="white" />
              )}
            />
          </TouchableOpacity>
        </View>
        <Divider style={{ marginVertical: 22 }} />
        <View>
          <Data navigation={navigation} />
        </View>
      </ScrollView>
      {/* <FootBar /> */}
    </View>
  );
};

export default AllTodos;

const styles = StyleSheet.create({
  heading: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  add: {
    backgroundColor: 'black',
    height: 50,
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  icon: {
    color: 'white',
  },
});
