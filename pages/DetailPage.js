import React, { useState, useEffect } from 'react'; // This line imports the React library from the react package. In React (including React Native), you must import React to use JSX (JavaScript XML), which allows you to write HTML-like syntax in JavaScript.
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Alert, Share } from 'react-native' // View and Text are built-in components in React Native used to structure and style UI elements. StyleSheet is a module it doesn't render antying 
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking'; // 외부 링크로 전달해주는 feature

export default function DetailPage({ navigation, route }) { // React, a function component is a JavaScript function that returns JSX, defining what the UI should look like.
    // **route**는 화면 간 데이터를 전달받을 때 사용하는 객체입니다. 즉, 다른 화면에서 이 화면으로 이동할 때 넘겨준 데이터를 route.params로 가져옵니다.


    //초기 컴포넌트의 상태값을 설정
    //state, setState 뿐 아니라 이름을 마음대로 지정할 수 있음!
    const [tip, setTip] = useState({
        "idx": 9,
        "category": "Finance",
        "title": "Comparing Rental Service Costs",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc": "Nowadays, various rental services, such as for water purifiers, air purifiers, cars, and even toys, are becoming increasingly popular. Many people are opting for rental services, thinking it's more economical than buying. However, as the number of these rental services increases, the costs can quickly add up. Especially because rental services include maintenance costs for the rented items, they are not as cheap as one might think. It is advisable to check if there are items you can manage on your own and exclude them from your rental services. It's a good idea to compare rental costs, purchasing costs, and maintenance costs from different angles before making a decision.",
        "date": "2020.09.09"
    })

    useEffect(() => {
        console.log(route)

        //Card.js에서 navigation.navigate 함수를 쓸때 두번째 인자로 content를 넘겨줬죠?
        //content는 딕셔너리 그 자체였으므로 route.params에 고대~로 남겨옵니다.
        //즉, route.params 는 content죠!

        navigation.setOptions({
            //setOptions로 페이지 타이틀도 지정 가능하고 각 card의 title 로 대체 가능
            title: route.params.title, 
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다. 
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
        setTip(route.params)
        // **CardPage**에서 사용자가 카드를 클릭하면, **navigation.navigate('DetailPage', contents)**로 **해당 카드의 정보(contents)**가 **DetailPage**로 전달됩니다.
        // **DetailPage**에서는 **route.params**로 **CardPage**에서 넘어온 데이터를 받을 수 있습니다.

    }, [])
// **useEffect()**는 컴포넌트가 처음 화면에 렌더링될 때 특정 동작을 하도록 만들어 주는 함수입니다. 즉, 페이지가 처음 열렸을 때 이 코드를 한 번 실행해요.
// **[]**는 한 번만 실행되도록 설정한 부분입니다. 그래서 페이지가 처음 열릴 때 헤더 설정을 바꾸고, 전달받은 데이터를 상태로 저장하는 거죠.


    const popup = () => {
        Alert.alert("팝업!!")
    }

    const share = () => { //팁 공유하기 누르면 tip 타이틀과 description, image 가 elements 전송됨
        Share.share({ //Share = component like a <View> and share is a function in a "Share" component
            message: `${tip.title} \n\n ${tip.desc} \n\n ${tip.image}`,
        });
    }

    const link = () => {
        Linking.openURL("mailto:mth976704@gmail.com");
    }


    return (
        // ScrollView에서의 flex 숫자는 의미가 없습니다. 정확히 보여지는 화면을 몇등분 하지 않고
        // 화면에 넣은 컨텐츠를 모두 보여주려 스크롤 기능이 존재하기 때문입니다. 
        // 여기선 내부의 컨텐츠들 영역을 결정짓기 위해서 height 값과 margin,padding 값을 적절히 잘 이용해야 합니다.
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <Image source={{ uri: tip.image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title} >{tip.title}</Text>
                    <Text style={styles.desc} >{tip.desc}</Text>

                    <View style={styles.buttonGroup}>
                        <TouchableOpacity style={styles.button} onPress={() => popup()}>
                            <Text style={styles.buttonText}>Bookmark Tip</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => share()}>
                            <Text style={styles.buttonText}>Share Tip</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={()=>link()}>
                            <Text style={styles.buttonText}>Explore More</Text></TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >


    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

    },

    image: {
        width: '100%',
        height: 400,
        borderRadius: 30,
    },

    textContainer: {
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },


    title: {
        color: '#eee',
        fontSize: 23,
        // textAlign: 'center',
        fontWeight: '700',
    },

    desc: {
        color: 'white',
        margin: 10,
        fontSize: 17,
    },

    buttonGroup: {
        flexDirection:"row",        
    },

    button: {
        paddingHorizontal: 15,
        marginTop: 10,
        marginBottom: 40,
        // alignSelf: 'center',
        borderColor: 'deeppink',
        borderWidth: 2,
        borderRadius: 7,
        marginHorizontal: 8,
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
    },
});