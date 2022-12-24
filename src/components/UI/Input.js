import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const Input = ({ style, label, keyBoardType, value, placeholder, error,
  onChange = () => { },
}) => {
  return (
    <>
      <View style={style}>
        {label && <Text style={{}}>{label}</Text>}
        <TextInput
          style={[styles.inputname]}
          onChangeText={(DATA) => onChange(DATA)}
          value={value}
          placeholder={placeholder}
          keyboardType={keyBoardType}
        />
      </View>
      <Text style={{ color: "red", fontSize: 14, }} >{error}</Text>
    </>
  )
}
export default Input
const styles = StyleSheet.create({
  inputname: {
    // height:60,
    // width: "100%",

    //  marginHorizontal:15,
    // borderWidth: 1,
    // borderRadius: 5,
    // borderColor: "#b8860b"
  },
})