import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Color from "../constants/colors";
import Card from '../components/Card';
import AnswerItem from '../components/ItemCard';
import { LinearGradient } from 'expo-linear-gradient';



const AnswersCard = props => {

    const [selectedAnswer, setSelectedAnswer] = useState("");



    const question = props.question;
    const answers = props.question.choices;
    const currentIndex = props.currentIndex;

    const onSelectAnswer = (answerTitle) =>{
        setSelectedAnswer(answerTitle);
        console.log("settings selected " + answerTitle);
    }

   
    return(
        
        <Card style={styles.questionView}>
        {answers.map((answer, index) => <AnswerItem key={index} answerTitle={answer} onSelectAnswer={onSelectAnswer} selected={answer === selectedAnswer}/>)}
        <TouchableOpacity activeOpacity={0.8} onPress={props.onNextQuestion}>
        <LinearGradient colors={['#28AEE2', '#28AEE2']} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Next</Text>
        </LinearGradient>
        </TouchableOpacity>
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
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 30
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
    
    
        
});

export default AnswersCard;