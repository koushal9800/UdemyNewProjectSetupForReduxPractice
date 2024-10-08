import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Pressable, StyleSheet, ScrollView, Image, FlatList } from "react-native";
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
import { updateSelectedCategoryId } from "../../redux/reducer/Categories";
import { updateSelectedDonationId } from "../../redux/reducer/Donation";
import { Routes } from "../../navigation/Routes";
import { logOut } from "../../api/user";



const Home = ({navigation}) => {

  const user = useSelector(state => state.user)
  const categories = useSelector(state => state.categories)
  const donations = useSelector(state => state.donations)
  const dispatch = useDispatch()
  // dispatch(resetInitialState())
  console.log(user);

  const [donationItems, setDonationItems] = useState([])
  const [categoryPage, setCategoryPage] = useState(1)
  const [categoryList, setCategoryList] = useState([])
  const [isLoadingCategories, setIsLoadingCategories] = useState(false)
  const categoryPageSize = 4

  useEffect(() => {
    const items = donations.items
    const filteredItems = items.filter(value =>

      value.categoryIds.includes(categories.selectedCategoryId)
    )
    setDonationItems(filteredItems)
  }, [categories.selectedCategoryId])

  useEffect(() => {
    setIsLoadingCategories(true)
    setCategoryList(pagination(categories.categories, categoryPage, categoryPageSize));
    setCategoryPage(prev => prev + 1)
    setIsLoadingCategories(false)
  }, [])

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize
    const endIndex = startIndex + pageSize
    if (startIndex >= items.length) {
      return []
    }
    return items.slice(startIndex, endIndex)
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }} >

      <ScrollView>

        <View style={styles.header} >
          <View  >
            <Text style={styles.headerIntroText} >Hello,</Text>
            <Header title={user.displayName} types={1} />
          </View>
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} resizeMode="contain" />
          <Pressable onPress={async ()=> {
            dispatch(resetInitialState())
            await logOut()
            } } >
            <Header title={'Log out'} />
          </Pressable>

        </View>

        <View style={{
          marginTop: 20,
          marginHorizontal: 24
        }} >
          <Search />

          <Image source={require('../../assets/images/highlighted_image.png')} resizeMode="contain"

            style={{ width: '100%', height: 160, marginTop: 20 }}
          />

          

        </View>

        <View style={{ marginLeft: 24, marginTop: 20 }} >

          <View style={{ marginBottom: 12 }} >
            <Header title="Select Category" types={2} />
          </View>



          <FlatList data={categoryList}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }

              setIsLoadingCategories(true)
              let newData = pagination(categories.categories, categoryPage, categoryPageSize)
              if (newData.length > 0) {
                setCategoryList(prevState => [...prevState, ...newData])
                setCategoryPage(prevState => prevState + 1)
              }
              setIsLoadingCategories(false)
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) =>
              <View style={{ marginRight: 10 }} key={item.categoryId} >
                <Tab title={item.name} isInactive={item.categoryId !== categories.selectedCategoryId}
                  tabId={item.categoryId}
                  onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                />
              </View>
            }
          />

        </View>
        {donationItems.length > 0 &&
          <View style={{ marginHorizontal: 24, marginTop: 20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between' }} >
            {donationItems.map(value => {

const categoryInformation = categories.categories.find(val => val.categoryId === categories.selectedCategoryId)

              return (
                <View key={value.donationItemId} style={{
                  maxWidth:'45%',
                  marginBottom:23
                }} >
                            <SingleDonationItem 
                              price={parseFloat(value.price)}
                              badgeTitle={categoryInformation.name}
                              uri={value.image}
                              donationTitle={value.name}
                              donationItemId={value.donationItemId}
                              onPress={selectedDonationId => {
                               dispatch(updateSelectedDonationId(selectedDonationId));
                               navigation.navigate(Routes.SingleDonationItem, {
                                categoryInformation
                               } )
                              }}
                            />
                </View>
              )
            }

            )}
          </View>
        }

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