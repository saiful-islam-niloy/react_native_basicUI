import React from 'react';
import {Button, View} from 'react-native';

const SemesterList =(props)=>{
    return (
        <View>
            <Button
                title='1st Semester'
                onPress={
                    function () { props.navigation.navigate("FirstSemester") }
                }/>
            <Button
                title='2nd Semester'
                onPress={
                    function () { props.navigation.navigate("SecondSemester") }
                }/>
            <Button
                title='3rd Semester'
                onPress={
                    function () { props.navigation.navigate("ThirdSemester") }
                }/>
        </View>
    );
}

export default SemesterList;