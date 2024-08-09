import React from "react";
import { View,Text, SafeAreaView } from "react-native";
import 'react-native-gesture-handler'
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/Tab/Tab";
import Badge from "../../components/Badge/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../../components/Search/Search";
import SingleDonationItem from "../../components/SingleDonationItem/SingleDonationItem";


const Home =() =>{
  return (
    <SafeAreaView style={{ flex:1, backgroundColor:'#FFFFFF' }} >
    {/* <View>
      
        <Header title={'Koushal B'} types={1}/>
        
        <Button title={'DONATE'} />
        <Button title={'DONATE'}  isDisabled={true} />
        
        <Tab  title={'Highlight'} />
        
        <Tab  title={'Highlight'} isInactive={true}/>
        <Badge title={'Environemt'} />
<FontAwesomeIcon icon={faSearch} />

    </View> */}


<Search  onSearch={(value)=> {console.log(value)} } />

<View style={{ flexDirection:'row', justifyContent:'space-between', paddingHorizontal:24 }} >
<SingleDonationItem uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'} 
badgeTitle={'Environment'} donationTitle={'Tree Cactus'} price={44} />
<SingleDonationItem uri={'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'} 
badgeTitle={'Environment'} donationTitle={'Tree Cactus'} price={44} />
</View>


    </SafeAreaView>
  )
}

export default Home;