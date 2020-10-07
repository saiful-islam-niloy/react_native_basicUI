import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const CourseList =(props)=>{
    console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>Course List</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 33,
            color: "red"
        },

        buttonMargin:{
            margin: 5,
            marginBottom: 10
        }
    }
)

export default CourseList;