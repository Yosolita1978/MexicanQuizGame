import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Color from "../constants/colors";




const ProgressBar = props => {

    return(
               
            <View style={styles.barView}>
            <View style={styles.progressView}>
                <Text style={styles.numText}> { props.progress} / {props.numQuestions}</Text>
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
        width:'10%',
        height: 25,
        marginTop: -25,
        justifyContent: 'center',
        alignContent: 'center',
               
    },
    numText:{
        color: "black",
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
        
    }
        
});

export default ProgressBar;