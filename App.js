import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizScreen from './screens/QuizScreen';
import StartScreen from './screens/StartScreen';

const questions = [{
  id: 1,
  title: "¿ Al lugar mítico de donde partieron los mexicas e iniciaron su migración se le conoce cómo?",
  choices: ["Aztlán", "Tula", "Mictlán", "Tenochtitlán"],
  correct: "Aztlán"
}]

export default function App() {
 
   const startScreen = <StartScreen onStart={() => setScreen(gameScreen)} />;
   const gameScreen = <QuizScreen questions={questions}/>; 
   const [screen, setScreen] = useState(startScreen);

  return (
    <View style={styles.container}>
      <StatusBar  barStyle={'light-content'}/>
      <Header />
        {screen}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
