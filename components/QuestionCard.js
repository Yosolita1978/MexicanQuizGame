import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from "../constants/colors";
import Card from '../components/Card';
import ProgressBar from './ProgressBar';


const QuestionCard = props => {

    const question = props.question;
    const totalQuestions = props.totalQuestions;
    const currentIndex = props.currentIndex;

    return(
        
        <Card style={styles.questionView}>
            <Text style={styles.questionText}>
            {question.title}
            </Text>
            <ProgressBar progress={currentIndex + 1} numQuestions={totalQuestions} />
        
        </Card>
        
    );

};

const styles = StyleSheet.create({
    questionView:{
        width: '90%',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'column',
        backgroundColor: Color.backgrounds,
        paddingVertical:20
    },
    questionText:{
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        color: Color.secondary,
        padding:15
    },
    
    barView:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width:'100%',
        backgroundColor: Color.backgroundGray,
        paddingTop: 20
        
    },
    
        
});

export default QuestionCard;