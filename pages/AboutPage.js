import React from 'react' // This line imports the React library from the react package. In React (including React Native), you must import React to use JSX (JavaScript XML), which allows you to write HTML-like syntax in JavaScript.
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native' // View and Text are built-in components in React Native used to structure and style UI elements. StyleSheet is a module it doesn't render antying 
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutPage() { // React, a function component is a JavaScript function that returns JSX, defining what the UI should look like.
    const onPress = () => {
        alert("You pressedd the button!")
    };

    const aboutImage = "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>HI! Welcome to the Life Hack App </Text>
            </View>

            <View style={styles.smallContainer}>
                <Image source={{ uri: aboutImage }} style={styles.Image} resizeMode={'cover'} />
                <Text style={styles.decs1}>We tried to convey a lot of information consisely!</Text>
                <Text style={styles.decs2}>We hope you will be able to complete it and make it your own!</Text>

                <TouchableOpacity onPress={onPress} style={styles.button}>
                    <Text style={styles.buttonText}>Your Instagram Account</Text>
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
        marginVertical: '15%'

    },
    smallContainer: {
        width: '80%',
        height: '65%',
        backgroundColor: 'white',
        borderRadius: 30,
        alignSelf: 'center',
    },

    Image: {
        width: '50%',
        height: '30%',
        alignSelf: 'center',
        marginTop: '20%',
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