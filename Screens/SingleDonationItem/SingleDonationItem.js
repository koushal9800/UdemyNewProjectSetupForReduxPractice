import React from "react";
import { View, Text, SafeAreaView, ScrollView,Image } from "react-native";
import { useSelector } from "react-redux";
import BackButton from "../../components/BackButton/BackButton";
import { Routes } from "../../navigation/Routes";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";



const SingleDonationItem = ({navigation, route}) => {

    const donationItemInformation = useSelector(state => state.donations.selectedDonationInformation)
    const categoryInformation = route.params.categoryInformation
    // console.log(route.params)

    return (
        <SafeAreaView style={{
            backgroundColor: '#fff',
            flex: 1
        }} >
            <View  >
            <BackButton  onPress = {()=>navigation.goBack()} />
            </View>
            <ScrollView style={{ marginHorizontal:20 }} >
                <Image  source={{uri: donationItemInformation.image }} 
                style={{ marginTop:12, marginBottom:24, width:'100%', height:240, borderRadius:5 }}
                resizeMode='cover'
                />
                <View style={{ marginBottom:16 }} >
                <Badge title={categoryInformation.name} />
                </View>

                <Header type={2} title={donationItemInformation.name} />
                <Text style={{ marginTop:7, marginHorizontal:7, fontFamily:'Inter_18pt-Black', marginBottom:25 }} >{donationItemInformation.description}</Text>
            </ScrollView>

<View style={{ marginHorizontal:20 }} >
    <Button title="Donate" />
</View>

        </SafeAreaView>
    )
}

export default SingleDonationItem