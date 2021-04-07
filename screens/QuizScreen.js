import React , {useState, useEffect}  from 'react';
import { View, StyleSheet} from 'react-native';
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
        <QuestionCard question={question} currentIndex={currentIndex} totalQuestions={totalQuestions}/>     
        <AnswersCard question={question} onNextQuestion={onNextQuestion} />
               
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
