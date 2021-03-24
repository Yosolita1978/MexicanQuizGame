import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from "../constants/colors";

const ProgressBar = props => {

    const numQuestion = props.progress;
    const totalQuestions = props.numQuestions;
    const percentage = numQuestion / totalQuestions * 100;

    let progressWidthStyle = {width:`${percentage}%` }
    
    return(
               
            <View style={styles.barView}>
            <View style={StyleSheet.compose(styles.progressView, progressWidthStyle)}>
                <Text style={styles.numText}> { numQuestion} / {totalQuestions}</Text>
            </View>
          
            </View>
                       
    );

};

const styles = StyleSheet.create({
    barView:{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        width:'100%',
        backgroundColor: Color.backgroundGray,
        paddingTop: 25,
        flexDirection: 'column'
                
    },
    progressView:{
        backgroundColor: Color.accent,
        height: 25,
        marginTop: -25,
        justifyContent: 'center',
        alignContent: 'center',
               
    },
    numText:{
        color: "black",
        fontSize: 11,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
        
});

export default ProgressBar;