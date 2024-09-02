import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

//비구조 할당 방식으로 넘긴 속성 데이터를 꺼내 사용함 (destructuring assignment)
//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({ contents, navigation }) {
    return ( //content = the whole objects in one specific index, i = number of index. So, if content.title i=0, which refers to the title in the index 0.
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate('DetailPage', contents) }}>
            <Image style={styles.cardImage} source={{ uri: contents.image }} />
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{contents.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{contents.desc}</Text>
                <Text style={styles.cardDate}>{contents.date}</Text>
            </View>
        </TouchableOpacity> //  tip.map((content, i), <View style={styles.card} key={i}> 똑같은 i 이다. 
    )
}

const styles = StyleSheet.create({

    card: {
        flex: 1,
        //컨텐츠들을 가로로 나열
        //세로로 나열은 column <- 디폴트 값임 
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#eee",
        paddingBottom: 10

    },
    cardImage: {
        flex: 1,
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    cardText: {
        flex: 2,
        flexDirection: "column",
        marginLeft: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "700"
    },
    cardDesc: {
        fontSize: 15
    },
    cardDate: {
        fontSize: 10,
        color: "#A6A6A6",
    }
})