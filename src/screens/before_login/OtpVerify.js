import { StyleSheet, Text, View, Image, ScrollView, ScrollViewComponent } from 'react-native'
import React, { useState } from 'react'
import { useRef, useEffect } from 'react';
import { FULL_HEIGHT, FULL_WIDTH, RADIUS } from '../../constants/layout'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import icons from '../../constants/icons'
import Paragraph from '../../components/UI/Paragraph'
import UiButton from '../../components/UI/UiButton'
import ScrollContainer from '../../components/HOC/ScrollContainer'
import SplashScreen from 'react-native-splash-screen'
import Toast from 'react-native-simple-toast';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { POST } from '../../backend/Backend'
import Loader from '../../components/UI/Loader';
const OtpVerify = ({ route,navigation}) => {
  let mobile = route?.params?.mobile_number
  const [otpCode, setOtp] = useState('')
  let body =
  {
    otp: otpCode,
    mobile_number: mobile
  }
  const OTP = async () => {
    POST(
      "http://54.144.109.80:5000/api/v1/verify-otp",
      body,
      { 'Authorization': 'Basic YWRtaW46YWRtaW4=' },
      res => {
        console.log('....res.>', res)
        if(res.status == 'approved'){
          navigation.navigate("Home")
        }else{
          console.warn('okkkkkkkk');
        }
      }
      // },
      // err => {
      //   console.log('.....err>', err)
      // },
      // fail => {
      //   console.log('...fail..>', fail)

      // }
    )
  }
  return (
    <ScrollContainer>
      <View style={styles.BoxONEContainer}>
        <Image style={styles.ImagePlate} source={icons.otpimage} />
      </View>
      <View style={styles.BoxTWOContainer}>
        <View>
          <Paragraph style={styles.LoginText}>OTP Sent & Verify</Paragraph>
        </View>
        <OTPInputView
          style={{ width: '100%', height: 200, padding: 10 }}
          pinCount={6}
          placeholderTextColor="black"
          code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => { setOtp(code) }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}

          onCodeFilled={(code) => {
            // console.log(`Code is ${code}, you are good to go!`)
            setOtp(code)
          }}
        />

        <UiButton text=' Verify & Continue'
          style={styles.UiButton}
          onPress={OTP}
        />

      </View>
    </ScrollContainer>
  )
}


export default OtpVerify

const styles = StyleSheet.create({
  BoxONEContainer: {
    // width: FULL_WIDTH,
    // height:FULL_HEIGHT*0.50,
    backgroundColor: colors.pink,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 200,

  },
  ImagePlate: {
    resizeMode: "contain",
    marginBottom: 40,
  },
  BoxTWOContainer: {
    height: FULL_HEIGHT * 0.50,
    // width:350,
    // width: FULL_WIDTH * 0.56,
    marginHorizontal: 8,
    marginVertical: -60,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: 9,
    elevation: 10,
    opacity: 0.8,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 110,
    borderColor: "black"


  },
  LoginText: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 13,
    marginHorizontal: 10,
  },
  forgat_Text: {
    //  borderWidth:1,
    // width: FULL_WIDTH * 0.80,
    alignItems: 'flex-end',
  },
  UiButton: {
    backgroundColor: colors.red,
    alignItems: "center",
    alignSelf: "center",
    // width:250,
    // width: FULL_WIDTH * 0.80,
    padding: 15,
    borderRadius: 10,

  },
  Register_red: {
    alignItems: "center",
    marginVertical: 10,
  },
  borderStyleBase: {
    width: 20,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "black",
  },

  underlineStyleBase: {
    width: 40,
    height: 50,
    // backgroundColor:'red',
    elevation: 1,
    color: "black",
    fontSize: 22,

  },

  underlineStyleHighLighted: {
    borderColor: "black",
    borderBottomWidth: 1,

    // borderWidth: 1,

  },
})