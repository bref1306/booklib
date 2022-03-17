import {View, StyleSheet, TouchableOpacity} from "react-native";
import {PoppinsText} from "./StyledText";
import {ButtonProp} from "../types";

export function ButtonPrimary (props : ButtonProp) {
    return (
        <View style={primary.main}>
            <TouchableOpacity style={primary.button} onPress={props.action} >
                <PoppinsText style={primary.text}>
                    {props.text}
                </PoppinsText>
            </TouchableOpacity>
        </View>
    )
}

const primary = StyleSheet.create({
    main: {
        backgroundColor: '#7F41A5',
        borderRadius: 32,
        alignSelf:"center",
        width: 360,
        overflow: 'hidden',
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 6.27,
        elevation: 10
    },
    button: {
        paddingVertical: 12,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign:"center",
        color: 'white'
    }
});

export function ButtonSecondary (props : ButtonProp) {
    return (
        <View style={secondary.main}>
            <TouchableOpacity style={secondary.button} onPress={props.action} >
                <PoppinsText style={secondary.text}>
                    {props.text}
                </PoppinsText>
            </TouchableOpacity>
        </View>
    )
};

const secondary = StyleSheet.create({
    main: {
        alignSelf:"center",
        width: 360,
        overflow: 'hidden'
    },
    button: {
        paddingVertical: 12,
    },
    text: {
        fontSize: 18,
        textTransform: "uppercase",
        textAlign:"center",
        color: 'black'
    }
});