import React,{useRef, useState} from "react";
import { Pressable, Text } from "react-native";
import PropTypes from 'prop-types'
import style from "./style";

const Tab = (props) => {

const [width,setWidth] = useState( 0)
const textRef = useRef(null)
const paddingHorizontal = 33
const tabWidth = {
    width:(paddingHorizontal *2 + width )
}
    return (
        <Pressable disabled={props.isInactive} style={[style.tab, props.isInactive && style.inactiveTab, tabWidth]}
            onPress={() => props.onPress()}
        >
            <Text onTextLayout={event => {
                setWidth(event.nativeEvent.lines[0].width)
            }}
            ref={textRef}
            style={[style.title, props.isInactive && style.inactiveTitle]} >{props.title}</Text>
        </Pressable>
    )
}

export default Tab

Tab.default = {
    isInactive: false,
    onPress: () => { }
}

Tab.PropTypes = {
    title: PropTypes.string.isRequired,
    isInactive: PropTypes.bool,
    onPress: PropTypes.func
}