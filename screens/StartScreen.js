import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const StartScreen = props => {

    return(
        <View style={styles.startScreen}>
            <Text style={styles.title}>¿ Quién quiere ser mexicano ? </Text>
        
        <ImageBackground source={require('../images/doll.png')} style={styles.imgView}/>
        <TouchableOpacity activeOpacity={0.8} onPress={props.onStart}>
        <LinearGradient colors={['#efcd43', '#efcd43']} style={styles.buttonView}>
            <Text style={styles.appButtonText}>Start Game</Text>
        </LinearGradient>
        </TouchableOpacity>
       
        
    </View>
    );

};

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    startScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
       },
    title:{
        fontSize: '20rem',
        marginVertical:'10rem',
        color: 'white',
        textDecorationColor: Color.accent,
        marginBottom: '20rem',
        fontWeight: "bold",
        marginTop: '40rem',
    },
       buttonView:{
        paddingHorizontal: '15rem',
        marginTop: '80rem'
    },
    
    imgView:{
        width: 200,
        height: 200,
        borderRadius: 80,
        overflow: 'hidden',
        marginTop: '40rem'
    }, 
    appButtonText: {
        fontSize: '18rem',
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        padding: '10rem'
      }

});

export default StartScreen;
