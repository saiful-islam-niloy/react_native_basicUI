import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const ThirdSemester =()=>{
    // console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>1. CSE 4202</Text>
            <Text style={styles.textStyle}>2. CSE 4203</Text>
            <Text style={styles.textStyle}>3. SWE 4204</Text>
            <Text style={styles.textStyle}>4. SWE4209</Text>
            <Text style={styles.textStyle}>5. Physics 4299</Text>
            <Text style={styles.textStyle}>6. CSE 4208</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            margin:5,
            marginLeft:10,
            fontSize: 25,
            color: "green"
        }
    }
)

export default ThirdSemester;