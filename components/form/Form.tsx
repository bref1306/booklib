import {KeyboardAvoidingView, TextInput, TextInputProps, View} from "react-native";
import {PoppinsText} from "../StyledText";

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
        <PoppinsText style={{fontSize:20, color: 'black', marginBottom: 16}}>{props.children}</PoppinsText>
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