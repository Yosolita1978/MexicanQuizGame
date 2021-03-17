import React from 'react';
import {StyleSheet, ImageBackground } from 'react-native';


const Header = props => {

    return(
        <ImageBackground source={require('../images/back.png')}  style={styles.header}>
            
        </ImageBackground>
    );

};

const styles = StyleSheet.create({
    header:{
        width:"100%",
        height: 90,
        paddingTop: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'black'
    }
     
    });

export default Header;
