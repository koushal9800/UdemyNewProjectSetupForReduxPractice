import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    button:{
        backgroundColor:'#2979F2',
        height:55,
        justifyContent:'center',
        borderRadius:50
    },
    disabled:{
        backgroundColor:'#2979F2',
        height:55,
        justifyContent:'center',
        borderRadius:50,
        opacity:0.5
    },
    title:{
        fontFamily:'Inter_24pt-Regular',
        fontSize:16,
        lineHeight:19,
        fontWeight:'500',
        color:'#fff',
        textAlign:'center'
    }
})

export default style;