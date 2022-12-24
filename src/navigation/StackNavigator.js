import React from 'react'
import { CardStyleInterpolators, createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
const commonOptions = {
    headerTitle: '',
    headerStyle: {
        backgroundColor: colors.white,
    },
    headerShadowVisible: false,
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerShown: false
};

const StackNavigator = () => {
    const { Navigator, Screen } = createNativeStackNavigator()
    return (
        <Navigator
            screenOptions={{
                // your stack style
            }}
            initialRouteName="GetApi"
        >
            <Screen   name='Wellcome'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/before_login/Wellcome').default}
                options={{
                    ...commonOptions
                }}
            />
              <Screen name='Login'
                getComponent={() => require('../screens/before_login/Login').default}
                options={{
                    ...commonOptions
                }}
            />
                <Screen name='SignUp'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/before_login/SignUp').default}
                options={{
                    ...commonOptions
                }}
                
            />
              <Screen name='Home'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/after_login/Home').default}
                options={{
                    ...commonOptions
                }}
                
            />
            <Screen name='OtpVerify'
                // use getComponent instead of component for better speed 
                getComponent={() => require('../screens/before_login/OtpVerify').default}
                options={{
                    ...commonOptions
                }}
                
                
            />
            <Screen name='GetApi'
            // use getComponent instead of component for better speed 
            getComponent={() => require('../screens/before_login/GetApi').default}
            options={{
                ...commonOptions
            }}
            
            
        />
        </Navigator>
    )
}

export default StackNavigator