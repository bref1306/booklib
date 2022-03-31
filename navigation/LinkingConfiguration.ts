/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          LoginScreen: 'login',
        },
      },
      Register: {
        screens: {
          RegisterSceen: 'register',
        },
      },
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Account: {
            screens: {
              AccountScreen: 'account',
            },
          },
          Library: {
            screens: {
              LibraryScreen: 'library',
            },
          },
          Collection: {
            screens: {
              CollectionScreen: 'collection',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
