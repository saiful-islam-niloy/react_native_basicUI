import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

const FacultyList =()=>{
    // console.log(props)
    return (
        <View>
            <Text style={styles.textStyle}>1. Hasanul Kabir</Text>
            <Text style={styles.textStyle}>2. Mohayminul Islam</Text>
            <Text style={styles.textStyle}>3. Tajkia Rahman</Text>
            <Text style={styles.textStyle}>4. Sabbir Rahman</Text>
            <Text style={styles.textStyle}>5. Ridwan Kabir</Text>
            <Text style={styles.textStyle}>6. Tasnim Ahmed</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize: 33,
            color: "blue",
            textAlign:"left",
            paddingLeft:5
        }
    }
)

export default FacultyList;