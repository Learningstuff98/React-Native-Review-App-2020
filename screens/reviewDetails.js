import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function ReviewDetails({ route, navigation }) {

  const pressHandler = () => {
    navigation.navigate('home');
  }

  const { title, body, rating } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.titleText}>{body}</Text>
      <Text style={styles.titleText}>{rating}</Text>
      <Button
        title='go to home'
        onPress={pressHandler}
      />
    </View>
  );
}
