import {
    KeyboardAvoidingView,
    KeyboardAvoidingViewProps,
    Platform,
    ScrollView, ScrollViewProps,
    TextInput,
    TextInputProps,
    View, ViewProps
} from "react-native";
import {PoppinsText} from "../StyledText";
import React, {useEffect, useState} from "react";
import {ErrorProps, FormErrorProps} from "../../types";

export function Form(props: { keyboardProps?: KeyboardAvoidingViewProps, view?: ScrollViewProps, children?: React.ReactNode}) {
    return (
        <KeyboardAvoidingView style={{flex:1, justifyContent: "center"}} behavior={Platform.OS === "ios" ? "padding" : "height"} {...props.keyboardProps}>
            <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}} {...props.view}>
                {props.children}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export function InputGroup(props: any) {
    return (
        <View style={
            {
                flexDirection: "column",
                width: 360,
                alignSelf:"center",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 12,
            }
        }>
            {props.children}
        </View>
    )
}

export function Label(props: any) {
    return (
        <PoppinsText style={{fontSize:20, color: 'black', marginBottom: 4}}>{props.children}</PoppinsText>
    )
}

export function Error(props: {errors: ErrorProps[], field: string}) {

    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        setMessage("");
        if(props.errors.length>0) {
            props.errors.forEach(err => {
                if (props.field === err.field) {
                    setMessage(err.messages[0]);
                    return;
                }
            })
        }

    }, [props.errors]);

    return (
        <PoppinsText style={{fontSize: 12, color: 'red', marginBottom: 4}}>{message}</PoppinsText>
    )
}

export function Input(props: TextInputProps) {
    return (
        <TextInput {...props} style={
            {
                width: 360,
                marginVertical: 8,
                paddingVertical: 12,
                paddingHorizontal: 12,
                fontFamily: 'poppins',
                backgroundColor: 'white',
                textAlign: "center",
                borderRadius: 34,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.35,
                shadowRadius: 6.27,
                elevation: 10
            }
        }/>
    )
}