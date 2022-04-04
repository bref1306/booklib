import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useCachedResources from './hooks/useCachedResources';
import * as React from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import {BottomTabNavigator} from './navigation';
import RegisterScreen from './screens/auth/RegisterScreen';
import {useEffect, useMemo, useState} from "react";
import { AuthContext } from './store/auth';
import * as SecureStore from 'expo-secure-store';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="Login"
                component={LoginScreen}/>
            <Stack.Screen
                name="Register"
                component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default function App() {
    const isLoadingComplete = useCachedResources();
    const [auth, setAuth] = useState<boolean>(false);


    const authMemo = useMemo(() => ({
        connect: async(data: any) => {
            if(data) {
                if(data.token) {
                    try {
                        setAuth(true);
                        await SecureStore.setItemAsync("storage_key", data.token);
                    } catch (e) {
                        console.log(e);
                    }
                }
            }
        },
        signOut: async () => {
            await SecureStore.deleteItemAsync("storage_key");
            setAuth(false);
        }
    }), []);

    useEffect(() => {
        const verifyToken = async () => {
            let token = null;
            try {
                token = await SecureStore.getItemAsync("storage_key");
            } catch (e){
                console.log(e);
            }

            setAuth(token != null);
        }

        verifyToken();
    }, [])

    if (!isLoadingComplete) {
        return null;
    }
    else {
        return (
            <AuthContext.Provider value={authMemo}>
                <NavigationContainer >
                    {!auth ? (
                        // No token found, user isn't signed in
                        <AuthStack/>
                    ) : (
                        <Stack.Navigator>
                            <Stack.Screen name="Root" component={BottomTabNavigator} options={{headerShown: false}}/>
                        </Stack.Navigator>
                    )}
                </NavigationContainer>
            </AuthContext.Provider>
        );
    }
}