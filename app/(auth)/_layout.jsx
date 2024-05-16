import { View, Text } from 'react-native'
import React from 'react'

// Only the Auth's screens and onboarding do not have navigation footer. The other screens do. This is why wer are using a separate layout.

const AuthLayout = () => {
    return (
        <View>
            <Text>AuthLayout</Text>
        </View>
    )
}

export default AuthLayout