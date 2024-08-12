import React from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, ScrollView, Image } from "react-native";
import 'react-native-gesture-handler'
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, resetInitialState } from "../../redux/reducer/User";



const Home = () => {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  dispatch(resetInitialState())
  console.log(user)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} >

      <ScrollView>

        <View style={styles.header} >
          <View  >
            <Text style={styles.headerIntroText} >Hello,</Text>
            <Header title={user.firstName + ' ' + user.lastName[0]} types={1} />
          </View>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} resizeMode="contain" />

        </View>

        <View style={{
          marginTop: 20,
          marginHorizontal: 24
        }} >
          <Search/>

<Image source={require('../../assets/images/highlighted_image.png')}  resizeMode="contain" 

style={{ width:'100%', height:160, marginTop:20 }}
/>

        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerIntroText: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '400',
    color: '#636776',
    marginBottom: 6
  },
  profileImage: {
    height: 50, width: 50
  }

})