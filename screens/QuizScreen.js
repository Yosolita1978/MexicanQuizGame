import React from 'react';
import { View, StyleSheet} from 'react-native';
import AnswersCard from '../components/AnswersCard';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = props => {

    const questions = props.questions;
    const totalQuestions = questions.length;
    const currentIndex = 0;
    const question = questions[currentIndex];

    

    return(
    <View style={styles.quizScreen}>
        <QuestionCard question={question} currentIndex={currentIndex} totalQuestions={totalQuestions}/>     
        <AnswersCard question={question}/>
               
    </View>
    );

};

const styles = StyleSheet.create({
    quizScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
       },
    
    
});

export default QuizScreen;
