import React, { useState } from "react";
import { View,Text,TextInput } from "react-native";
import PropTypes from 'prop-types'

const Input = (props) =>{
    const [value, setValue] = useState('')

    return (
        <View>
            <Text style={{ fontFamily:'Inter', fontWeight:'400', fontSize:12, lineHeight:15, color:'#36455A' }} >{props.label}</Text>
            <TextInput 
            style={{
                // marginTop:12,
                paddingBottom:12,
                borderBottomWidth:1,

            }}
            value={value}
            onChangeText={val => {setValue(val); props.onChangeText(val) }}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry}
            />
        </View>
    )
}

Input.defaultProps = {
    onChangeText: () => {},
    keyboardType:'default',
    secureTextEntry:false
}

Input.PropTypes ={
    label:PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool
}

export default Input