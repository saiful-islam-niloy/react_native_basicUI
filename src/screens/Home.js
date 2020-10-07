import React from 'react';
import { Text, Image, StyleSheet, View ,Button, TouchableOpacity} from 'react-native';

const Home = (props) => {
    console.log(props)
    return (
        <View>
            <TouchableOpacity style={styles.image}>
                <Image source={
                    {
                        height: 100,
                        width: 100,
                        uri: "http://www.iutoic-dhaka.edu/assets/mainsite/images/iut.png"
                    }}/>
            </TouchableOpacity>

            <Text style={styles.textStyle}> Department of CSE </Text>
            <Text style={styles.textStyle}> Programme: SWE</Text>

            <TouchableOpacity
                style={styles.buttonStyle }
                onPress={
                    function () { props.navigation.navigate("Profile") }}>
                <Text style={styles.buttonText}> Profile </Text>
            </TouchableOpacity>
            
            <Button
                title='Semester Wise Course List'
                onPress={
                    function () { props.navigation.navigate("SemesterList") }
                }/>

            <Button
                title='List of Faculty Members'
                onPress={
                    function () { props.navigation.navigate("FacultyList") }
                }/>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle: {
            textAlign:"center",
            fontSize: 25,
            color: "red",
            margin:5
        },
        buttonStyle:{
            backgroundColor:"green",
            margin:10,
            marginLeft:50,
            marginRight: 50,
            padding:10
        },
        buttonText:{
            fontSize: 25,
            color:"white",
            textAlign:"center"
        },
        image:{
            justifyContent:"center",
            alignContent:"center",
            marginLeft:150,
            marginTop:10,
            alignContent:"center"
        }

    }
)

export default Home;