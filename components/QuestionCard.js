import React from 'react';
import { View, StyleSheet, Text, Dimensions  } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    questionView:{
        alignItems: 'center',
        marginTop: '15rem',
        flexDirection: 'column',
        backgroundColor: Color.backgrounds,
        paddingVertical:'10rem'
    },
    questionText:{
        fontSize: '20rem',
        marginVertical: '10rem',
        textAlign: 'center',
        color: Color.secondary,
        padding:'15rem'
    },
    
    barView:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width:'100%',
        backgroundColor: Color.backgroundGray,
        paddingTop: '20rem'
        
    },
    
        
});

export default QuestionCard;