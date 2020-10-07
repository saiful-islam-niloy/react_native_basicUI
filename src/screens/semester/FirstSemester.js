import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const FirstSemester =()=>{
    // console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>1. SWE 4103</Text>
            <Text style={styles.textStyle}>2. SWE 4104</Text>
            <Text style={styles.textStyle}>3. SWE 4105</Text>
            <Text style={styles.textStyle}>4. CSE 4109</Text>
            <Text style={styles.textStyle}>5. Math 4111</Text>
            <Text style={styles.textStyle}>6. Humanties 4112</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            margin:5,
            marginLeft:10,
            fontSize: 25,
            color: "red"
        }
    }
)

export default FirstSemester;