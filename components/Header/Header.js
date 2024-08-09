import React from "react";
import { View, Text } from "react-native";
import PropTypes from 'prop-types'
import style from "./style";

const Header = props =>{

const styleToApply = () => {
    switch(props.types){
        case 1 :
            return style.title1
            case 2 :
            return style.title2
            case 3 :
            return style.title3
            default:
                return style.title1
    }
}

    return (
    <View>
        <Text style={styleToApply()} >{props.title}</Text>
    </View>
    )
};

export default Header

Header.default = {
    title:'',
    types:1
};

Header.PropTypes = {
    title: PropTypes.string,
    types: PropTypes.number
}

