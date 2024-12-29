import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  
  return (
    <SafeAreaView style={styles.appStyle}>
      <Text > Multiline TextInput Example </Text>
      <View>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Email"
        />
        <TextInput
          style={styles.textInputStyle}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder="About you"
          multiline={true}
          numberOfLines={4}
        />

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  appStyle: {
    flex: 1,
    margin: 8,
  },
  textInputStyle: {
    border: 4,
    borderColor: "silver",
    borderRadius: 16,
    backgroundColor: "lightgray",
    marginTop: 8
  }
});

export default App;