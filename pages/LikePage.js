import React, { useState, useEffect } from "react"
import { Text, image, StyleSheet, ScrollView} from "react-native";
import LikeCard from '../components/LikeCard';
import Card from '../components/Card';
export default function LikePage({navigation, route}) {

    const [tip, setTip] = useState([{
        "idx":3,
        "category":"Finance",
        "title":"Find Your Unclaimed Money",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money1.png",
        "desc":"‘Leaking money’ includes forgotten card points, dormant accounts, or refunds you didn’t know about. It's important to track down any unclaimed money and gather these small amounts. Check if you have overpaid for services like cable or satellite TV, or if you have unclaimed deposits, such as set-top box deposits. Also, use card point integration services to check how many points you have across multiple cards. Nowadays, it's easy to reclaim insurance refunds, dormant insurance payouts, or dormant deposits.",
        "date":"03.26.2024"
    },
    {
        "idx":4,
        "category":"Finance",
        "title":"Avoid the Traps of Discounts and Limited-Time Offers!",
        "image": "https://storage.googleapis.com/sparta-image.appspot.com/lecture/money2.png",
        "desc":"Have you heard the saying, ‘If you don’t buy it, you save 100%’? It's easy to be tempted by good deals, especially during big sales at supermarkets. It's better to buy essentials in small quantities as needed rather than in bulk. Frequent trips to the store can lead to buying more than you need, increasing your spending. Be cautious of phrases like ‘sale’, ‘limited-time discount’, as they often lead to unintended purchases, whether it’s from home shopping networks or large supermarkets.",
        "date":"04.30.2023"
    },
])

useEffect(() =>{
    navigation.setOptions({
        title:'Bookmarked Tips'
    })
})
    
    return(
        <ScrollView style={styles.container}>
            {
                tip.map((contents, i) =>{
                    return(<LikeCard key={i} content={contents} navigation={navigation}/>)
                })
                    // content={contents}, 전자의 콘텐츠는 LikeCard parameter content 랑 이름이 같아야 함.
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})