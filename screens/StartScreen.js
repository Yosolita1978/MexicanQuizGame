import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, ImageBackground } from 'react-native';
import Color from '../constants/colors';

const StartScreen = props => {

    return(
        <View style={styles.startScreen}>
            <Text style={styles.title}>¿ Quién quiere ser mexicano ? </Text>
        <View style={styles.cardView}>
        <ImageBackground source={require('../images/doll.png')} style={styles.imgView}/>
         <View style={styles.buttonView}>              
            <Button color={Color.accent} title="Start Game"></Button>
        </View>
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
        marginBottom: 20,
        fontFamily: 'sans-serif'
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
    }

});

export default StartScreen;
