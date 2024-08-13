import React from "react";
import { View,Text,Pressable } from "react-native";
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const BackButton = (props) => {
    return(
        <Pressable onPress={()=> props.onPress() } 
        style={{
            backgroundColor:'#FAFAFA',
            width:44, height:44,borderRadius:22,
            alignItems:'center',
            justifyContent:'center'
        }}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </Pressable>
    )
}

BackButton.PropTypes = {
    onPress: PropTypes.func.isRequired
}

export default BackButton