/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {StyleProp, ViewStyle} from "react-native";
import DeconectionScreen from './screens/DeconectionScreen';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Register: undefined;
  Login: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Home: undefined;
  Account: undefined;
  Collection: undefined;
  Library: undefined;
  Book: undefined;
  Deconection:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type BubbleProp = {
  background?: string,
  radius?: number,
  position?: BubblePositionProp
}

export type BubblePositionProp = {
  x:number,
  y:number
}

export type ButtonProp = {
  text?: string,
  action?: any,
}

export type FormErrorProps = {
  errors: ErrorProps[];
}

export type ErrorProps = {
  field: string,
  messages: string[]
}