import React, { useState, useEffect } from 'react'; // This line imports the React library from the react package. In React (including React Native), you must import React to use JSX (JavaScript XML), which allows you to write HTML-like syntax in JavaScript.
import { StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Alert, Share } from 'react-native' // View and Text are built-in components in React Native used to structure and style UI elements. StyleSheet is a module it doesn't render antying 
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';

export default function DetailPage({ navigation, route }) { // React, a function component is a JavaScript function that returns JSX, defining what the UI should look like.

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
            //setOptions로 페이지 타이틀도 지정 가능하고
            title: route.params.title,
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다. 
            headerStyle: {
                backgroundColor: '#000',
                shadowColor: "#000",
            },
            headerTintColor: "#fff",
        })
        setTip(route.params)
    }, [])

    const popup = () => {
        Alert.alert("팝업!!")
    }

    const share = () => {
        Share.share({
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