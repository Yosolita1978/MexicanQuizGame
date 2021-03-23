import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizScreen from './screens/QuizScreen';
import StartScreen from './screens/StartScreen';
import totalQuestions from './Data/questions';

function pickQuestions(num){
  const questionsSet = new Set();
  while (questionsSet.size < num){
    let randomIndex = Math.floor(Math.random() * Math.floor(totalQuestions.length));
    //console.log(totalQuestions[randomIndex]);
    questionsSet.add(totalQuestions[randomIndex])
  }
  return Array.from(questionsSet);
}

export default function App() {

   const [questions, setQuestions] = useState([]);
   //console.log(questions);

    
   const [screen, setScreen] = useState('start');

  return (
    <View style={styles.container}>
      <StatusBar  barStyle={'light-content'}/>
      <Header />
        {screen === 'start' ? <StartScreen onStart={() => {setQuestions(pickQuestions(10)); setScreen('game')}} /> : <QuizScreen questions={questions}/> }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
