import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions  } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from "../constants/colors";
import Card from '../components/Card';
import AnswerItem from '../components/ItemCard';
import { LinearGradient } from 'expo-linear-gradient';



const AnswersCard = props => {

    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [gradient, setGradient] = useState(['#DEDEDE', '#DEDEDE']);
    const disabled = selectedAnswer === "";
    const question = props.question;
    const answers = question.choices;
    const currentIndex = props.currentIndex;
       
    
    const onSelectAnswer = (answerTitle) =>{
        setSelectedAnswer(answerTitle);
        //console.log("settings selected " + answerTitle);
        setGradient(['#28AEE2', '#28AEE2']);
    }

    const onNext = () =>{
        const isRight = selectedAnswer === question.correct;
        //console.log(isRight);
        setSelectedAnswer("");
        props.onNextQuestion(isRight);
        setGradient(['#DEDEDE', '#DEDEDE']);
    }

      
    return(
        
        <Card style={styles.questionView}>
        {answers.map((answer, index) => <AnswerItem key={index} answerTitle={answer} onSelectAnswer={onSelectAnswer} selected={answer === selectedAnswer}/>)}
        <TouchableOpacity activeOpacity={0.8} onPress={onNext} disabled={disabled}>
        <LinearGradient colors={gradient} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Next</Text>
        </LinearGradient>
        </TouchableOpacity>
      </Card>
        
    );

};
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    questionView:{
        alignItems: 'stretch',
        marginTop: '5rem',
        flexDirection: 'column',
        backgroundColor: 'black',
    
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: '10rem',
        paddingHorizontal: '12rem',
        marginTop: '20rem'
    },
    appButtonText: {
        fontSize: '18rem',
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      buttonDisbled:{
          backgroundColor: Color.secondarydesac,
      }
    
    
        
});

export default AnswersCard;