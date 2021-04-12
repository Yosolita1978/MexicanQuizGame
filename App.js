import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import QuizScreen from './screens/QuizScreen';
import StartScreen from './screens/StartScreen';
import FinalScreen from './screens/FinalScreen';
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

   const [totalRightAnswers, setTotalRightAnswers] = useState(0);

   const toggleScreen = (screen) =>{
     if(screen === 'start'){
       return <StartScreen onStart={() => {setQuestions(pickQuestions(10)); setScreen('game')}} />
     } else if (screen === 'game'){
      return <QuizScreen questions={questions} onEnd={(rightAnswers)=> { setTotalRightAnswers(rightAnswers); setScreen('final')}}/>
     } else if (screen === 'final'){
       return <FinalScreen iswinner={totalRightAnswers > 7} totalRightAnswers={totalRightAnswers} startAgain={() => {setScreen('start')}}/>
     }
   }

  return (
    <View style={styles.container}>
      <StatusBar  barStyle={'light-content'}/>
      <Header />
        { toggleScreen(screen) }
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
});
