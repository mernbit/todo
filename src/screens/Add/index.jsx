import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, Divider, Text } from 'react-native-paper';
import { EvilIcons } from '@react-native-vector-icons/evil-icons';
import Form from './Form';
const Add = ({ navigation }) => {
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
        >
          Save
        </Button>
      </View>
      <Divider style={{ marginVertical: 22 }} />
      <View>
        <Form />
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
