import React, { useState } from "react";

import { SafeAreaView, View, Text, ScrollView, Pressable } from "react-native";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import { createUser } from "../../api/user";


const Registration = ({ navigation }) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1, }} >

            <BackButton onPress={() => navigation.goBack()} />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ marginHorizontal: 24, flex: 1, justifyContent: 'center' }} >
                <View style={{ marginBottom: 12 }} >
                    <Header type={1} title={'Hello and Welcome'} />
                </View>


                <View style={{ marginBottom: 20 }} >
                    <Input label={'First & Last Name'} placeholder={'Enter your Full Name'} onChangeText={(value) => setFullName(value)} secureTextEntry={false} />
                </View>

                <View style={{ marginBottom: 20 }} >
                    <Input label={'Email'} placeholder={'Enter your Email'} onChangeText={(value) => setEmail(value)} keyboardType="email-address" secureTextEntry={false} />
                </View>

                <View style={{ marginBottom: 20 }} >
                    <Input label={'Password'} placeholder={'******'} onChangeText={(value) => setPassword(value)} secureTextEntry={true} />
                </View>

                <View>
                    <Button title={"Registration"} onPress={async () => {

                        let user = await createUser(fullName, email, password)
                        if (user.error) {
                            setError(user.error)
                        }
                        else {
                            setError('')
                            setSuccess("You have sucessfully registered");
                            setTimeout(() => navigation.goBack(), 3000)
                        }
                    }} />
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}

export default Registration