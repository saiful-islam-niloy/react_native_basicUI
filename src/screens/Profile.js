import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const Profile =()=>{
    // console.log(props)
    return (
        <View>
            <Image source={
                {
                    height: 100,
                    width: 100,
                    uri: "https://avatars3.githubusercontent.com/u/52848678?s=460&u=c2a7d88fe4a0cef108cf41c8b3b577b5062c8469&v=4"
                }
            }/>
            <Text style={styles.textStyle}>Name: Saiful Islam Niloy</Text>
            <Text style={styles.textStyle}>Student ID: 170042065</Text>
            <Text style={styles.textStyle}>Room No: Non-residential</Text>
            <Text style={styles.textStyle}>Email: niloy2424@gmail.com</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            textAlign:"center",
            fontSize: 22,
            color: "red"
        }
    }
)

export default Profile;