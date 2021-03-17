import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from "../constants/colors";
import Card from '../components/Card';


const QuestionCard = props => {
    return(
        
        <Card style={styles.questionView}>
            <Text style={styles.questionText}>
            {props.questionTitle}
            </Text>
            <View style={styles.barView}>
            <View style={styles.progressView}>
                <Text style={styles.numQuestion}>1/10</Text>
            </View>
          
            </View>
        
        </Card>
        
    );

};

const styles = StyleSheet.create({
    questionView:{
        width: '100%',
        alignItems: 'center',
        marginTop: 15,
        flexDirection: 'column',
        backgroundColor: Color.backgrounds
    },
    questionText:{
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
        color: Color.secondary,
        padding:15
    },
    numQuestion:{
        fontSize: 14,
        color: 'black',
        
    },
    barView:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width:'100%',
        backgroundColor: Color.backgroundGray,
        paddingTop: 20
        
    },
    progressView:{
        backgroundColor: Color.accent,
        width:'10%',
        height: 20,
        marginTop: -20,
        justifyContent: 'center',
        alignContent: 'center'
        
    }
    
});

export default QuestionCard;