/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Pressable } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 import HomeScreen from '../screens/HomeScreen';
 import CollectionScreen from '../screens/CollectionScreen';
 import LibraryScreen from '../screens/LibraryScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { View } from '../components/Themed';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator>
       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
 
 /**
  * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
  * https://reactnavigation.org/docs/bottom-tab-navigator
  */
 const BottomTab = createBottomTabNavigator<RootTabParamList>();
 
 export function BottomTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <BottomTab.Navigator
       initialRouteName="Home"
       screenOptions={{
         tabBarActiveTintColor: '#fff',
         tabBarActiveBackgroundColor: '#000',
         tabBarInactiveBackgroundColor:'#000',
         tabBarStyle: {
           height: 70,
         }
       }}>
       <BottomTab.Screen
         name="Home"
         component={HomeScreen}
         options={{
           title: 'Accueil',
           tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Collection"
         component={CollectionScreen}
         options={{
           title: 'Mes collections',
           tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
         }}
       />
       <BottomTab.Screen
         name="Library"
         component={LibraryScreen}
         options={{
           title: 'Ma biblothèque',
           tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
         }}
       />
     </BottomTab.Navigator>
   );
 }
 
 /**
  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
  */
 function TabBarIcon(props: {
   name: React.ComponentProps<typeof FontAwesome>['name'];
   color: string;
 }) {
   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
 }