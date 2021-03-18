import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizScreen from './screens/QuizScreen';
import StartScreen from './screens/StartScreen';

export default function App() {

  const questions = [{
    id: 1,
    title: "¿ Al lugar mítico de donde partieron los mexicas e iniciaron su migración se le conoce cómo?",
    choices: ["Aztlán", "Tula", "Mictlán", "Tenochtitlán"],
    correct: "Aztlán"
}]


  return (
    <View style={styles.container}>
      <StatusBar  barStyle={'light-content'}/>
      <Header />
      <QuizScreen questions={questions}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
