import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from "../constants/colors";
import Card from '../components/Card';
import AnswerItem from '../components/ItemCard';



const AnswersCard = props => {

    const question = props.question;
    const answers = props.question.choices;

    return(
        
        <Card style={styles.questionView}>
        {answers.map((answer) => <AnswerItem answerTitle={answer} />)}
        </Card>
        
    );

};

const styles = StyleSheet.create({
    questionView:{
        width: '90%',
        alignItems: 'stretch',
        marginTop: 5,
        flexDirection: 'column',
        backgroundColor: 'black',
        height: 'auto'
    },
    
    
        
});

export default AnswersCard;