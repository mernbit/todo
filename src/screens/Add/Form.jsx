import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput, Text } from 'react-native-paper';
const Form = ({ setData }) => {
  return (
    <View style={{ marginTop: 36, gap: 22 }}>
      <Text variant="titleLarge">Todo Details</Text>
      <View>
        <Text>Title</Text>
        <TextInput
          cursorColor="gray"
          label="Title"
          style={styles.input}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          onChangeText={text => setData(prev => ({ ...prev, title: text }))}
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          cursorColor="gray"
          label="Description"
          style={styles.input}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          onChangeText={text =>
            setData(prev => ({ ...prev, description: text }))
          }
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    backgroundColor: '#e8e8e8ff',
    marginTop: 8,
  },
});
