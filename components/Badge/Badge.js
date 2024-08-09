import React,{useRef, useState} from "react";
import { Pressable, Text, View } from "react-native";
import PropTypes from 'prop-types'
import style from "./style";

const Badge = (props) => {

const [width,setWidth] = useState( 0)
const textRef = useRef(null)
const paddingHorizontal = 10
const tabWidth = {
    width:(paddingHorizontal *2 + width )
}
    return (
        <View  style={[style.badge, tabWidth]}
         
        >
            <Text onTextLayout={event => {
                setWidth(event.nativeEvent.lines[0].width)
            }}
            ref={textRef}
            style={style.title} >{props.title}</Text>
        </View>
    )
}

export default Badge


Badge.PropTypes = {
    title: PropTypes.string.isRequired,
    
}