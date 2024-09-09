import React, { useEffect } from 'react' // This line imports the React library from the react package. In React (including React Native), you must import React to use JSX (JavaScript XML), which allows you to write HTML-like syntax in JavaScript.
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native' // View and Text are built-in components in React Native used to structure and style UI elements. StyleSheet is a module it doesn't render antying 
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Linking from 'expo-linking'; // 외부 링크로 전달해주는 feature


export default function AboutPage({ navigation }) { // React, a function component is a JavaScript function that returns JSX, defining what the UI should look like.
    const link = () => {
        Linking.openURL("https://www.instagram.com/taehee.moon?igsh=MTBwdGZkaXc0aDdheA==");
    }

    const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"

    useEffect(() => {
        // setOptions는 useEffect 안에서 한 번만 설정되도록 변경
        navigation.setOptions({
            //setOptions로 페이지 타이틀도 지정 가능하고
            title:"About Us",
            //StackNavigator에서 작성했던 옵션을 다시 수정할 수도 있습니다. 
            headerStyle: {
                backgroundColor: '#1C2D6B',
                shadowColor: "#000",
            },
            headerTintColor: "#fff", // head font color
        })
    }, [navigation])
    // [/* dependency array */]: useEffect가 언제 다시 실행될지를 제어하는 배열.
    //의존성 배열 안에 넣은 값(예: navigation)이 변경되었을 때에만 useEffect 내부의 코드가 실행됩니다.
    // 의존성 배열이 비어있으면 useEffect는 처음 렌더링될 때 한 번만 실행됩니다.

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Hello, Welcome to the {'\n'}Life Hack Application!</Text>
            </View>

            <View style={styles.smallContainer}>
                <Image source={{ uri: aboutImage }} style={styles.Image} resizeMode={'cover'} />
                <Text style={styles.decs1}>We tried to convey a lot of life hacks clearly and concisely!</Text>
                <Text style={styles.decs2}>Our goal is to help you apply them easily and make your life more efficient every day!</Text>

                <TouchableOpacity onPress={link} style={styles.button}>
                    <Text style={styles.buttonText}>Instagram Account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1, // This makes the component expand to fill its container
        // justifyContent: 'center', // Centers the content vertically
        // alignItems: 'center', // Centers the content horizontally
        backgroundColor: '#1C2D6B',
        // alignItems: "center",
    },
    title: {
        fontSize: 30, // Font size of 20
        color: 'white', // Text color
        fontWeight: 'bold', // Bold text
        textAlign: 'center',
    },
    smallContainer: {
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
        marginVertical: 20
    },

    Image: {
        width: '50%',
        height: '30%',
        alignSelf: 'center',
        marginTop: '15%',
        borderRadius: 30,
    },

    decs1: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        padding: 20,
    },

    decs2: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        marginBottom: 20,
    },

    button: {
        backgroundColor: "orange",
        padding: 20,
        marginHorizontal: 30,
        borderRadius: 20,
    },

    buttonText: {
        fontSize: 17,
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
    }
});