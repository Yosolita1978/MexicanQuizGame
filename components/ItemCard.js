import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Color from "../constants/colors";

const AnswerItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.listItem} on>
        <Text style={styles.textItem} >{props.answerTitle}</Text>
        </View>
        </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: Color.primary,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 10,
        marginVertical:5,
        marginTop: 10,
        borderRadius: 10,
        elevation: 8,
      },
      textItem:{
          fontSize: 16,
          textAlign: 'center',
          color: 'white'

      }
});

export default AnswerItem;
