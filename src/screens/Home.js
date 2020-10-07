import React from 'react';
import { Text, Image, StyleSheet, View , TouchableOpacity} from 'react-native';

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

            <TouchableOpacity
                style={styles.buttonStyle }
                onPress={
                function () { props.navigation.navigate("SemesterList") }}>
                <Text style={styles.buttonText}> Semester Wise Course List </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonStyle }
                onPress={
                function () { props.navigation.navigate("FacultyList") }}>
                <Text style={styles.buttonText}> List of Faculty Members </Text>
            </TouchableOpacity>
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
            display:"flex",
            justifyContent:"center",
            alignContent:"center",
            margin:20,
            marginTop:10,
            alignContent:"center"
        }

    }
)

export default Home;