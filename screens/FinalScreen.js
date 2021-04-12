import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions   } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
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
                return `El que piensa pierde, paisano.\n Tuviste ${totalRightAnswers} respuestas correctas.`;
            }else{
                return `Pos'Pa'la otra \n Tuviste ${totalRightAnswers} de 10 respuestas correctas.` ;
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

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    finalScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
       },
    title:{
        fontSize: '20rem',
        marginTop: '40rem',
        color: Color.accent,
        textDecorationColor: Color.accent,
        marginBottom: '20rem',
        fontWeight: 'bold'
    },
       buttonView:{
        paddingHorizontal: '15rem',
        marginTop: '50rem',
    },
    
    imgView:{
        width: 150,
        height: 150,
        borderRadius: 120,
        overflow: 'hidden'
    }, 
    appButtonText: {
        fontSize: '14rem',
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        padding: '10rem'
      },
      finalCard:{
          marginTop: '30rem',
          width: '90%',
      },
      answers:{
          fontWeight: 'bold',
          fontSize: '20rem',
          textAlign: 'center',


      }

});

export default FinalScreen;
