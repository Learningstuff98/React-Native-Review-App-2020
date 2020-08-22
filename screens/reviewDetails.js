import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        ReviewDetails Screen
      </Text>
      <Button
        title='go to home'
        onPress={pressHandler}
      />
    </View>
  );
}
