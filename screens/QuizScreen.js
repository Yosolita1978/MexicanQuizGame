import React , {useState, useEffect}  from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AnswersCard from '../components/AnswersCard';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = props => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const questions = props.questions;
    const totalQuestions = questions.length;
    const question = questions[currentIndex];

    const onNextQuestion = (isRight) => {
        if(isRight){
            setRightAnswers((rightAnswers) => rightAnswers + 1);
        }
        if(currentIndex < totalQuestions -1){
            setCurrentIndex((currentIndex) => currentIndex + 1);
        }
        if(currentIndex === totalQuestions - 1){
            setIsFinished(true);
        }
        
    }

    useEffect(() => {
        if(isFinished){
            props.onEnd(rightAnswers);
        }
    }, [rightAnswers, isFinished]);

    return(
    <View style={styles.quizScreen}>
        <ScrollView overScrollMode={'always'} showsVerticalScrollIndicator={true}>
        <QuestionCard question={question} currentIndex={currentIndex} totalQuestions={totalQuestions}/>     
        <AnswersCard question={question} onNextQuestion={onNextQuestion} />
        </ScrollView>       
    </View>
    );

};
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    quizScreen:{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        paddingHorizontal: '10rem'
       },
    
    
});

export default QuizScreen;
