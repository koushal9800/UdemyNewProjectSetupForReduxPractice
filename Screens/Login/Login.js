import React, { useState } from "react";

import { SafeAreaView, View,Text, ScrollView, Pressable } from "react-native";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { Routes } from "../../navigation/Routes";
import { loggingUser } from "../../api/user";
import { useDispatch } from "react-redux";
import { logIn, resetInitialState } from "../../redux/reducer/User";


const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

const dispatch = useDispatch()
// dispatch(resetInitialState())

    return (
        <SafeAreaView style={{ backgroundColor:'#fff', flex:1, }} >
            <ScrollView showsVerticalScrollIndicator={false}  contentContainerStyle={{ marginHorizontal:24,flex:1,justifyContent:'center'  }} >
                <View style={{  marginBottom:12 }} >
                <Header type={1} title={'Welcome Back'} />
                </View>

            <View style={{ marginBottom:20 }} >
            <Input label={'Email'} placeholder={'Enter your Email'} onChangeText={(value)=> setEmail(value) } keyboardType="email-address"  secureTextEntry={false} />
            </View>

            <View style={{ marginBottom:20 }} >
            <Input label={'Password'} placeholder={'******'} onChangeText={(value)=> setPassword(value) }   secureTextEntry={true} />
            </View>

            <View>
                <Button title={"Login"}  onPress={async ()=> {
                 let user =   await loggingUser(email, password)
                    if(!user.status){
                        setError(user.error)
                    }
                    else {
                        setError('')
                        dispatch(logIn(user.data))
                        navigation.navigate(Routes.Home)
                    }
                    }} />
            </View>

            <Pressable style={{ alignItems:'center' }}  onPress={()=> navigation.navigate(Routes.Registration) } >
                <Header type={1} title={"Dont have an account"} />
            </Pressable>

            </ScrollView>
        </SafeAreaView>
    )
}

export default Login