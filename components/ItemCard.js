import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,  Dimensions   } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from "../constants/colors";

const AnswerItem = props => {

    let listItemStyle = styles.listItem;
    if(props.selected){
        listItemStyle = StyleSheet.compose(styles.listItem, styles.selectedItem);
    }

    const onSelectAnswer = () =>{
        props.onSelectAnswer(props.answerTitle);
    }

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onSelectAnswer} >
        <View style={listItemStyle} on>
        <Text style={styles.textItem} >{props.answerTitle}</Text>
        </View>
        </TouchableOpacity>
        );
};
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const styles = EStyleSheet.create({
    listItem: {
        backgroundColor: Color.accentLight,
        opacity: 0.9,
        borderBottomColor: '#bbb',
        padding: '10rem',
        marginVertical: '5rem',
        marginTop: '10rem',
        borderRadius: 10,
        elevation: 8,
        width: '100%'
      },
      textItem:{
          fontSize: '16rem',
          textAlign: 'center',
          color: 'black'

      }, 
      selectedItem: {
          backgroundColor: Color.accent,
      }
});

export default AnswerItem;
