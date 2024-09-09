import React from 'react';
//설치한 스택 네비게이션 라이브러리를 가져옵니다
import { createStackNavigator } from '@react-navigation/stack';

//페이지로 만든 컴포넌트들을 불러옵니다
import DetailPage from '../pages/DetailPage';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import LikePage from '../pages/LikePage';

//스택 네비게이션 라이브러리가 제공해주는 여러 기능이 담겨있는 객체를 사용합니다
//그래서 이렇게 항상 상단에 선언하고 시작하는게 규칙입니다!
const Stack = createStackNavigator(); // 즉, 화면 간의 전환을 위한 "내비게이션 시스템"을 만들어 주는 역할
// !이 함수가 제공하는 기능들 챗에 검색해보면 다양한 기능들 예시 보여줌!

const StackNavigator = () => {
    return (

        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그를 선언합니다.
        //위에서 선언한 const Stack = createStackNavigator(); Stack 변수에 들어있는 태그를 꺼내 사용합니다.
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션들이 담겨 있습니다.
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "skyblue",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height: 100,
                },
                //헤더의 텍스트를 왼쪾에 둘지 가운데에 둘지를 결정
                headerTitleAlign: 'left',
                headerTintColor: "#000",
                headerBackTitleVisible: false,
                gestureEnabled: true,  // 스와이프 제스처 활성화

            }}
        // 첫 번째 {}는 JSX에서 JavaScript 코드를 전달하기 위한 것이고,
        // 두 번째 {}는 Object를 정의하기 위한 것입니다.  
        >

            {/* name 속성: 해당 화면의 이름을 설정합니다. 내비게이션에서 이 이름을 사용하여 화면을 이동시킬 수 있습니다.*/}
            {/* component 속성: 실제로 렌더링될 컴포넌트를 지정합니다. 여기서는 MainPage와 DetailPage가 각각의 화면 역할을 합니다. */}
            {/* **Stack.Screen**은 단순히 컴포넌트를 페이지로 등록하는 역할을 합니다. 실제로 페이지 간 이동은 navigation.navigate() 같은 함수로 이루어집니다. */}
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="DetailPage" component={DetailPage} />
            <Stack.Screen name="AboutPage" component={AboutPage} />
            <Stack.Screen name="LikePage" component={LikePage} />

        </Stack.Navigator>
    )
}
// 여기서 Navigator는 여러 Screen을 포함하여 화면 간 전환을 처리하는 역할을 하고, 각각의 Screen은 앱의 개별적인 화면을 정의하는 태그입니다.

export default StackNavigator;






// 요런 방법도 존재: screenOptions 이 부분 따로 분리해서 스타일 개체처럼 작성하고 JSX에서 한 번의 중괄호를 사용해 전달 가능

// const screenOptions = {
//     headerStyle: {
//       backgroundColor: "skyblue",
//       borderBottomColor: "white",
//       shadowColor: "white",
//       height: 100,
//     },
//     headerTitleAlign: 'left',  // 헤더 텍스트 위치
//     headerTintColor: "#000",
//     headerBackTitleVisible: false,
//     gestureEnabled: true,  // 스와이프 제스처 활성화
//   };
  
//   <Stack.Navigator screenOptions={screenOptions}> 
//     <Stack.Screen name="Home" component={HomeScreen} />
//     <Stack.Screen name="Detail" component={DetailScreen} />
//   </Stack.Navigator>
