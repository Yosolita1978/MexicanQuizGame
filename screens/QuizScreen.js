import React , {useState}  from 'react';
import { View, StyleSheet} from 'react-native';
import AnswersCard from '../components/AnswersCard';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = props => {
    //console.log(props);

    const [currentIndex, setCurrentIndex] = useState(0);


    const questions = props.questions;
    const totalQuestions = questions.length;
    const question = questions[currentIndex];

    const onNextQuestion = () => {
        if (currentIndex === totalQuestions - 1){
            return;
        }
        setCurrentIndex((currentIndex) => currentIndex + 1);

    }

    return(
    <View style={styles.quizScreen}>
        <QuestionCard question={question} currentIndex={currentIndex} totalQuestions={totalQuestions}/>     
        <AnswersCard question={question} onNextQuestion={onNextQuestion}/>
               
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
