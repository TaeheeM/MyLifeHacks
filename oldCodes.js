
//   card: {
//     flex: 1,
//     //컨텐츠들을 가로로 나열
//     //세로로 나열은 column <- 디폴트 값임 
//     flexDirection: 'row', // contents are set horizontally
//     marginVertical: 10,
//     borderBottomWidth: 0.5,
//     borderBottomColor: "#eee",
//     paddingBottom: 10,

//   },

//   cardImage: {
//     flex: 1, // In the whole Pizza Container, pizza 이미지는 1/3 차지
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },


//   cardTextContainer: { // pizza text container possess 2/3
//     flex: 2, // 행에서 사용할 수 있는 공간을 차지
//     marginLeft: 10, // 텍스트에 약간의 패딩 추가
//   },

//   cardTitle: {
//     fontWeight: 'bold',
//     fontSize: 20,
//   },

//   cardDesc: {
//     fontSize: 15,
//     color: 'black',
//   },

//   cardDate: {
//     marginTop: 5,
//     fontSize: 12,
//     color: "gray",
//   },


{/* Pizza box */ }
{/* <Image style={styles.pizza}
            source={require('./assets/pizza.png')} />
          <View style={styles.PizzaTextContainer}>
            <Text style={styles.PizzaTitleText}>Moisten the leftover pizza!</Text>
            <Text style={styles.pizzaText} numberOfLines={3} ellipsizeMode="tail">
              The leftover pizzas are not as delicious as the first time because moisture is lost. In this case, you can moisten the pizza by pouring water into a bowl and microwave oven for about 1 and half to 2 minutes. The water vaporizes in the microwave and moisturizes the pizza.</Text>
            <Text style={styles.PizzaDateText}>August 20th, 2023</Text>
          </View> */}




          // return (<View style={styles.card} key={i}>  //content = the whole objects in one specific index, i = number of index. So, if content.title i=0, which refers to the title in the index 0.
                                //   <Image style={styles.cardImage} source={{uri:content.image}}/>
                                //   <View style={styles.cardContainer}>
                                //     <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                                //     <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                                //     <Text style={styles.cardDate}>{content.date}</Text>
                                //   </View>
                                // </View>) //  tip.map((content, i), <View style={styles.card} key={i}> 똑같은 i 이다.    