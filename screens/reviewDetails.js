import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles';

export default function ReviewDetails({ navigation }) {

  const pressHandler = () => {
    //navigation.goBack();
    navigation.navigate('home');
  }

  return(
    <View>
      <Text style={styles.container}>
        ReviewDetails Screen
      </Text>
      <Button
        title='go to home'
        onPress={pressHandler}
      />
    </View>
  );
}
