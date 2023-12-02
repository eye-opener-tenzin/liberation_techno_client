import { NavigationContainer } from '@react-navigation/native'
import useUserGlobalStore from '@/store/useUserGlobalStore'
import React, { useEffect } from 'react'
import AuthStackNavigator from './auth-stack-navigator'
import AppStackNavigator from './app-stack-navigator'

const Navigation = () => {
    const {  user, updateUser } = useUserGlobalStore()

    console.log(`user`, JSON.stringify(user, null, 2))
  
    useEffect(() => {
      updateUser(null)
      return () => {}
    }, [])
    return (
    <NavigationContainer>
        {user ? <AppStackNavigator /> :  <AuthStackNavigator /> } 
    </NavigationContainer>
    )
}

export default Navigation