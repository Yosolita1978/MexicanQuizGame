import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity  } from 'react-native';
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

const styles = StyleSheet.create({
    startScreen:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
       },
    title:{
        fontSize: 20,
        marginVertical:10,
        color: 'white',
        textDecorationColor: Color.accent,
        marginBottom: 20,
        fontWeight: "bold",
        marginTop: 80,
    },
       buttonView:{
        paddingHorizontal: 15,
        marginTop: 80
    },
    
    imgView:{
        width: 200,
        height: 200,
        borderRadius: 80,
        overflow: 'hidden',
        marginTop: 40
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
