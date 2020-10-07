import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const SecondSemester =()=>{
    // console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>1. Math 4303</Text>
            <Text style={styles.textStyle}>2. Chemistry 4305</Text>
            <Text style={styles.textStyle}>3. Humanities 4308</Text>
            <Text style={styles.textStyle}>4. CSE 4311</Text>
            <Text style={styles.textStyle}>5. CSE 4315</Text>
            <Text style={styles.textStyle}>6. SWE 4355</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            margin:5,
            marginLeft:10,
            fontSize: 25,
            color: "purple"
        }
    }
)

export default SecondSemester;