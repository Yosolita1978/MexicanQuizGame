import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
import Color from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../components/Card';

const FinalScreen = props => {

    const iswinner = props.iswinner;
    const totalRightAnswers = props.totalRightAnswers;

    const chooseMsg = (totalRightAnswers) => {
        if(iswinner){
            return `Tuviste ${totalRightAnswers} de 10 respuestas correctas`;
        } else {
            if(totalRightAnswers === 0){
                return `El que piensa pierde paisano.\n Tuviste ${totalRightAnswers} respuestas correctas.`;
            }else{
                return `Tuviste ${totalRightAnswers} de 10 respuestas correctas. \n Pos'Pa'La otra`;
            }
            
        }
    }


    return(
        <View style={styles.finalScreen}>
            <Text style={styles.title}>{iswinner ? "FELICIDADES PAISANO" : "LÁSTIMA MARGARITO"}</Text>
        
        <ImageBackground source={require('../images/doll.png')} style={styles.imgView}/>
        <Card style={styles.finalCard}>
            <Text style={styles.answers}>{chooseMsg(totalRightAnswers)}</Text>
        </Card>
        <TouchableOpacity activeOpacity={0.8} onPress={props.startAgain} >
        <LinearGradient colors={['#ef4f92', '#ef4f92']} style={styles.buttonView}>
            <Text style={styles.appButtonText}>Play Again</Text>
        </LinearGradient>
        </TouchableOpacity>
        
        
    </View>
    );

};

const styles = StyleSheet.create({
    finalScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
       },
    title:{
        fontSize: 20,
        marginTop: 40,
        color: Color.accent,
        textDecorationColor: Color.accent,
        marginBottom: 20,
        fontWeight: 'bold'
    },
       buttonView:{
        paddingHorizontal: 15,
        marginTop: 50,
    },
    
    imgView:{
        width: 150,
        height: 150,
        borderRadius: 120,
        overflow: 'hidden'
    }, 
    appButtonText: {
        fontSize: 14,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        padding: 10
      },
      finalCard:{
          marginTop: 30,
          width: 300,
      },
      answers:{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center',


      }

});

export default FinalScreen;
