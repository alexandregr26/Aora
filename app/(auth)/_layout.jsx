import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

// Only the Auth's screens and onboarding do not have navigation footer. The other screens do. This is why we are using a separate layout.

const AuthLayout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>

            <StatusBar backgroundColor='#161622' style='light' />
        </>
    )
}

export default AuthLayout