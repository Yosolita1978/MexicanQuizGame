import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: Color.accentLight,
        opacity: 0.9,
        borderBottomColor: '#bbb',
        padding: 10,
        marginVertical:5,
        marginTop: 10,
        borderRadius: 10,
        elevation: 8,
      },
      textItem:{
          fontSize: 16,
          textAlign: 'center',
          color: 'black'

      }, 
      selectedItem: {
          backgroundColor: Color.accent,
      }
});

export default AnswerItem;
