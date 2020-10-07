import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import FacultyList from './src/screens/FacultyList';
import Profile from './src/screens/Profile';
import SemesterList from './src/screens/SemesterList';
import CourseList from './src/screens/CourseList';
import FirstSemester from './src/screens/semester/FirstSemester';
import SecondSemester from './src/screens/semester/SecondSemester';
import ThirdSemester from './src/screens/semester/ThirdSemester';

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name= "Home" component={Home}/>
        <stack.Screen name= "FacultyList" component={FacultyList}/>
        <stack.Screen name= "Profile" component={Profile} />
        <stack.Screen name= "SemesterList" component={SemesterList}/>
        <stack.Screen name= "CourseList" component={CourseList} />
        <stack.Screen name= "FirstSemester" component={FirstSemester} />
        <stack.Screen name= "SecondSemester" component={SecondSemester} />
        <stack.Screen name= "ThirdSemester" component={ThirdSemester} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;