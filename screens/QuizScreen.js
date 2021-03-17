import React from 'react';
import { View, StyleSheet} from 'react-native';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = props => {

    return(
    <View style={styles.quizScreen}>
        <QuestionCard questionTitle={"¿Here goes one of the questions about Mexico?"}/>     
               
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
