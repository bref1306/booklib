import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SecureStore from 'expo-secure-store';


import useCachedResources from './hooks/useCachedResources';
import * as React from 'react';
import LoginScreen from './screens/auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Navigation, { BottomTabNavigator } from './navigation';
import RegisterScreen from './screens/auth/RegisterScreen';
import BookScreen from './screens/BookScreen';


export default function App() {
  const isLoadingComplete = useCachedResources();
 
const [state, dispatch] = React.useReducer(
  (prevState : any, action : any) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
    }
  },
  {
    isLoading: true,
    isSignout: false,
    userToken: null,
  }
);


React.useEffect(() => {
  // Fetch the token from storage then navigate to our appropriate place
  const bootstrapAsync = async () => {
    let userToken;

    try {
      userToken = await SecureStore.getItemAsync('userToken');
    } catch (e) {
      // Restoring token failed
    }

    // After restoring token, we may need to validate it in production apps

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    dispatch({ type: 'RESTORE_TOKEN', token: userToken });
  };

  bootstrapAsync();
}, []);


const authContext = React.useMemo(
  () => ({
    signIn: async (data :any) => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `SecureStore`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' }),
    signUp: async (data : any) => {
      // In a production app, we need to send user data to server and get a token
      // We will also need to handle errors if sign up failed
      // After getting token, we need to persist the token using `SecureStore`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
  }),
  []
);
const AuthContext = React.createContext(authContext);

const Stack = createNativeStackNavigator();
if (!isLoadingComplete) {
  return null
} else {
 return (
   <AuthContext.Provider value={authContext}>
     <NavigationContainer>
       <Stack.Navigator>
       {state.userToken == null ? (
           // No token found, user isn't signed in
           // <SafeAreaProvider>
           //     <Navigation colorScheme={colorScheme} />
           // </SafeAreaProvider>
           <>
            <Stack.Screen
               name="Login"
               component={LoginScreen} />
            <Stack.Screen
               name="Register"
               component={RegisterScreen} />
          </>
           
         ) : (
           // User is signed in
           <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
         )}
       </Stack.Navigator>
     </NavigationContainer>
   </AuthContext.Provider>
 );
}
  
}