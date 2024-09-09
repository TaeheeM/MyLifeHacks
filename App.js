import React from 'react';
//이제 모든 페이지 컴포넌트들이 끼워져있는 책갈피를 메인에 둘예정이므로
//컴포넌트를 더이상 불러오지 않아도 됩니다.
// import MainPage from './pages/MainPage';
// import DetailPage from './pages/DetailPage';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';


//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'

export default function App() {

  console.disableYellowBox = true;

  return ( 
  <NavigationContainer> 
    {/* NavigationContainer: 네비게이션을 관리하는 컨테이너로, 앱에서 네비게이션을 사용할 때 가장 바깥에 위치해야 합니다. */}
    
    <StatusBar style="black" />
    {/* StatusBar: 상태 표시줄(배터리, 시간, WiFi 표시되는 부분)의 스타일을 설정합니다. */}

    <StackNavigator/> 
    {/* StackNavigator: Stack Navigator를 통해 화면 간의 전환을 관리하고, 여러 **화면(Screen)**을 쌓아가는 구조로 화면을 전환할 수 있게 합니다. */}
 </NavigationContainer>
 


);

}

