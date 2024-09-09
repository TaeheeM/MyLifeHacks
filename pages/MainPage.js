import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; // SafeAreaView = a component (pre-built element), it can be brought from the react libraries. 

// const main_pic = 'https://storage.googleapis.com/sparta-image.appspot.com/lecture/main.png'
import data from '../data.json'; // App.js and data.json is on the same level. That's why ./ was used, if data.json are on the higher level, the code should start with ../
import Card from '../components/Card';
import Loading from '../components/Loading';
import { StatusBar } from 'expo-status-bar';

  
// React에서 함수형 컴포넌트는 props라는 객체를 매개변수로 받습니다. props에는 해당 컴포넌트에 전달된 다양한 정보들이 담겨 있어요. 여기서 우리는 navigation과 route라는 두 가지 값만 추출해서 사용하기 위해 중괄호 {}를 사용한 거예요.
//**navigation**은 React Navigation이 각 화면에 자동으로 전달해 주는 객체입니다. 이 객체에는 화면 간의 이동, 이전 화면으로 돌아가기, 옵션 설정 등 여러 가지 내비게이션 관련 기능들이 포함되어 있어요. (no need to import it is a props provided from React)
// Props: They are passed from parent to child: A parent provides values, and the child receives them as props.
export default function MainPage({ navigation, route }) {

    //useState 사용법
    //[state,setState] 에서 state는 이 컴포넌트에서 관리될 상태 데이터를 담고 있는 변수
    //setState는 state를 변경시킬때 사용해야하는 함수

    //모두 다 useState가 선물해줌
    //useState()안에 전달되는 값은 state 초기값
    const [state, setState] = useState([])
    const [cateState, setCateState] = useState([]) // categories


    //하단의 return 문이 실행되어 화면이 그려진다음 실행되는 useEffect 함수
    //내부에서 data.json으로 부터 가져온 데이터를 state 상태에 담고 있음
    const [ready, setReady] = useState(true) //처음에 ready는 true로 설정되어 있어요. (const [ready, setReady] = useState(true);)

    useEffect(() => {
        // 처음 렌더링 될 때 useEffect 가 실행이 된다. 
        // 'setTimeout' 으로 인해, 이 코드 블록은 1초 뒤에 실행이됩니다. : 1초가 지나면 setState(data.tip)과 setCateState(data.tip)이 호출되어 데이터를 state와 cateState에 담아요.
        //1초 뒤에 실행되는 코드들이 담겨 있는 함수
        setTimeout(() => {
            //헤더의 타이틀 변경
            navigation.setOptions({
                title: 'My Life Hacks'
            })
            setState(data.tip)  // 여기서 data.tip의 데이터가 state에 담김
            setCateState(data.tip) // 이 데이터를 cateState에도 담음
            setReady(false) // 로딩이 끝났음을 알림
        }, 1000)  //뒤의 1000 숫자는 1초를 뜻함
    }, [])


    const category = (cate) => { // cate**는 사용자가 선택한 카테고리의 이름(예: "Daily Life", "Finance" 등)을 의미해요
        if (cate === "View All") {
            //전체보기면 원래 꿀팁 데이터를 담고 있는 상태값으로 다시 초기화
            setCateState(state) // state 안에는 data.tip 이 담겨져 있다.
        } else {
            // 특정 카테고리만 필터링해서 보여줌
            setCateState(state.filter((d) => { // filter: 이 함수는 배열의 각 요소에 대해 조건을 확인하고, 그 조건을 만족하는 요소들만 새로운 배열로 만들어줍니다.
                return d.category == cate // d: 이건 배열 state의 각 요소를 의미해요. 예를 들어, 하나의 꿀팁 데이터를 의미할 수 있어요
            }))
        }
    }
    // 즉, d는 배열 안에 있는 각 딕셔너리 전체를 가리킵니다. filter 함수는 이 딕셔너리들을 하나씩 확인하면서 조건에 맞는 것만 걸러내서 새로운 배열을 만들어 줍니다.
    // 즉 cate = category name, filter 함수가 d = 배열 안에 있는 각 딕셔너리 전체에서 cate 에 맞는 value 를 확인 하고, 조건에 맞는 모든 dictionary 뱉어냄



    // let tip = data.tip; // 이미 데이터를 수입했어도 data.json 안에 있는 tip 변수를 다시한번 선언, 즉 명시해줘야 한다. data in "data.tip" refers to data.jason and tip in "data.tip" refers to the "tip" list in data data.json. That is, there are multple objects included in the array uner the key 'tip'.
    //data.json 데이터는 state에 담기므로 상태에서 꺼내옴

    let todayWeather = 10 + 27;
    let todayCondition = "cloudy"

    // ture : false, false 되면 화면 로딩 화면 사라지고 실제 내요 표시
    return ready ? <Loading /> : ( // Screen rendering
        // Screen adjustment
        // <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            {/* StatusBar */}
            <StatusBar style="light" />

            {/* Title */}
            {/* <Text style={styles.head}>My Life Hacks</Text> */}

            {/* Weather */}
            <Text style={styles.weather}>Today's Weather: {todayWeather + '°C ' + todayCondition}</Text>

            {/* About Page */}
            <TouchableOpacity style={styles.aboutButton} onPress={()=> {navigation.navigate('AboutPage') }}><Text style={styles.aboutText}>About Us</Text></TouchableOpacity>

            {/* Tip Image */}
            <Image style={styles.main_pic}
                source={require('../assets/main_pic.png')}
                resizeMode="contain"   // 사진을 잘라내지 않고, 전체 이미지를 보이도록 사이즈를 조정 
            />

            {/* button boxes */}
            <ScrollView style={styles.buttonContainer} horizontal={true} showsHorizontalScrollIndicator={false}>

                <TouchableOpacity style={styles.middleButtonAll} onPress={() => { category('View All') }}>
                    <Text style={styles.middleButtonText}>View All</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.middleButton01} onPress={() => { category('Daily Life') }}>
                    <Text style={styles.middleButtonText}>Daily Life</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.middleButton02} onPress={() => { category('Finance') }}>
                    <Text style={styles.middleButtonText}>Finance</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.middleButton03} onPress={() => { category('Pets') }}>
                    <Text style={styles.middleButtonText}>Pets</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.middleButton04} onPress={() => {navigation.navigate('LikePage')}}>
                    <Text style={styles.middleButtonText}>Bookmarked Tips</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Card box */}
            <View style={styles.cardContainer}>
                {    // "map" function is JavaScript code and JS expressions must be used with "{}" at first in JXS syntax.
                    cateState.map((content, i) => { // map 은 각 요소를 순회하면서 각 요소에 대한 콜백 함수 실행시킴
                        return (<Card contents={content} key={i} navigation={navigation}/>
                            // Card = 위에 reference of import Card, contents 는 Card.js parameter 안에 있는 contents  
                            //!중요! contents={content}: content 객체를 Card 컴포넌트에 contents라는 이름의 prop으로 전달합니다.
                            //!중요! Card 컴포넌트는 이 contents prop을 받아서 내부적으로 사용합니다:
                            //!중요!{contents}: Card 컴포넌트는 contents prop을 비구조화 할당하여 사용합니다. 즉, contents.image, contents.title, contents.desc, contents.date를 이용해 각각의 데이터를 UI에 반영합니다.        
                       
                            // 첫 번째 navigation (왼쪽의 navigation={navigation}): Card 컴포넌트에 전달할 props 이름입니다. (걍 기능 불러온겨)
                            // 두 번째 navigation (오른쪽의 navigation): MainPage에서 받은 React Navigation의 navigation 객체입니다.
                            // 따라서 Card 컴포넌트에서도 **navigation.navigate()**를 사용하여 다른 화면으로 이동할 수 있습니다.
                            // MainPage 컴포넌트는 React Navigation이 자동으로 전달하는 navigation 객체를 받습니다.
                            // MainPage는 이 navigation 객체를 Card 컴포넌트에 props로 전달합니다. (첫 번째 navigation)
                            // Card 컴포넌트는 MainPage로부터 전달받은 navigation 객체를 사용해서 다른 화면으로 이동할 수 있습니다. (두 번째 navigation)
                            // React Navigation ----> MainPage({ navigation }) ----> Card({ navigation })
                            
                            //**"카드 페이지(CardPage)에 처음부터 navigation prop을 할당하면 안 되는가? 왜 navigation을 부모 컴포넌트(MainPage)에서 전달하고 있는가?
                            // React Navigation은 각각의 화면에만 navigation 객체를 자동으로 전달합니다. 예를 들어, MainPage가 React Navigation에 의해 화면으로 등록되어 있기 때문에 **MainPage**는 navigation 객체를 받을 수 있어요.
                            
                        
                        )
                    })
                }

            </View>

        </ScrollView>
        // </SafeAreaView>

    );
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 15,

    },

    scrollContainer: {
        backgroundColor: "white",
        // paddingTop: 15,
    },

    head: {
        marginTop: 20,
        fontWeight: 'bold', // '700' 이렇게도 가능
        fontSize: 30,
        marginLeft: 20,
    },

    weather: {
        alignSelf: "flex-end",
        paddingRight: 20,
        color: "gray",
        fontSize: 13,
        marginTop: 5,
    },

    aboutButton: {
        marginRight: 20,
        marginTop: 10,
        width: 100,
        padding: 10,
        alignContent: 'center',
        backgroundColor: 'pink',
        alignSelf: 'flex-end',
        borderRadius: 10
    }, 
    
    aboutText: {
        color: 'white',
        fontSize: 17,
        fontWeight: "700",
        textAlign: "center",
    },

    main_pic: {
        margin: 15,
        width: '90%',
        height: 220,
        borderRadius: 15,
        alignSelf: "center" //컼텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
    },

    buttonContainer: {
        flexDirection: 'row',
    },

    middleButtonAll: {
        marginTop: 10,
        backgroundColor: '#27e9b9',
        borderRadius: 10,
        paddingHorizontal: 20, // 좌우 여백을 설정하여 텍스트 길이에 따라 버튼 크기를 조정
        paddingVertical: 10, // 상하 여백
        marginHorizontal: 10,
    },

    middleButton01: {
        marginTop: 10,
        backgroundColor: '#FF6347',
        borderRadius: 10,
        paddingHorizontal: 20, // 좌우 여백을 설정하여 텍스트 길이에 따라 버튼 크기를 조정
        paddingVertical: 10, // 상하 여백
    },

    middleButton02: {
        marginTop: 10,
        backgroundColor: '#FFA500',
        borderRadius: 10,
        paddingHorizontal: 20, // 좌우 여백을 설정하여 텍스트 길이에 따라 버튼 크기를 조정
        paddingVertical: 10, // 상하 여백
        marginHorizontal: 10,
    },

    middleButton03: {
        marginTop: 10,
        backgroundColor: '#32CD32',
        borderRadius: 10,
        paddingHorizontal: 20, // 좌우 여백을 설정하여 텍스트 길이에 따라 버튼 크기를 조정
        paddingVertical: 10, // 상하 여백
    },

    middleButton04: {
        marginTop: 10,
        backgroundColor: '#00BFFF',
        borderRadius: 10,
        paddingHorizontal: 20, // 좌우 여백을 설정하여 텍스트 길이에 따라 버튼 크기를 조정
        paddingVertical: 10, // 상하 여백
        marginHorizontal: 10,
    },

    middleButtonText: {
        fontSize: 18,
        color: "white",
        fontWeight: 'bold',
        textAlign: "center"

    },

    cardContainer: {
        marginTop: 10,
        marginLeft: 10,

    },



});








