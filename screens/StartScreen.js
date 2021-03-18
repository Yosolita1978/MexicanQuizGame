import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
import Color from '../constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

const StartScreen = props => {

    return(
        <View style={styles.startScreen}>
            <Text style={styles.title}>¿ Quién quiere ser mexicano ? </Text>
        <View style={styles.cardView}>
        <ImageBackground source={require('../images/doll.png')} style={styles.imgView}/>
        <TouchableOpacity activeOpacity={0.8} onPress={props.onStart}>
        <LinearGradient colors={['#efcd43', '#efcd43']} style={styles.buttonView}>
            <Text style={styles.appButtonText}>Start Game</Text>
        </LinearGradient>
        </TouchableOpacity>
        </View>
        
    </View>
    );

};

const styles = StyleSheet.create({
    startScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
       },
    title:{
        fontSize: 20,
        marginVertical:10,
        color: 'white',
        textDecorationColor: Color.accent,
        marginBottom: 20
    },
       buttonView:{
        paddingHorizontal: 15,
        marginTop: 10
    },
    
    imgView:{
        width: 300,
        height: 300,
        borderRadius: 10,
        overflow: 'hidden'
    }, 
    appButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        padding: 10
      }

});

export default StartScreen;
