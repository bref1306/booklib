import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, View} from 'react-native';
import {PoppinsText} from "../../components/StyledText";
import {Bubble} from "../../components/CircleBubble";
import Layout from "../../constants/Layout";
import {ButtonPrimary, ButtonSecondary} from "../../components/Button";
import {Input, InputGroup, Label} from "../../components/form/Form";

export default function Login ({navigation}: any) {
    return (
        <View style={styles.main}>
            <Bubble radius={Layout.window.width * 1.5} background={"#E0E0E0"} position={{x: Layout.window.width,y: 28}}/>
            <Bubble radius={Layout.window.width * 1.5} background={"#E0E0E0"} position={{x: 50 ,y: Layout.window.height - 64}}/>
            <Bubble radius={Layout.window.width - 128} background={"#C5C5C5"} position={{x: 60,y:  Layout.window.height/2}}/>
            <View style={{marginTop: 42,flex: 0}}>
                <PoppinsText style={styles.title}>BookLib</PoppinsText>
                <PoppinsText style={styles.subtitle}>Se Connecter</PoppinsText>
            </View>
            <KeyboardAvoidingView style={{flex:1, justifyContent: "center"}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <InputGroup>
                    <Label>Adresse mail</Label>
                    <Input placeholder={"at@gmail.com"} />
                </InputGroup>
                <InputGroup>
                    <Label>Mot de passe</Label>
                    <Input placeholder={"15489"} keyboardType={"default"} secureTextEntry={true} />
                </InputGroup>
            </KeyboardAvoidingView>
            <View>
                <ButtonPrimary text="Se Connecter"/>
                <ButtonSecondary text="Créer mon compte" action={() => {
                    navigation.navigate('Register');
                }}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#eee',
        position: "relative",
        paddingVertical: 32
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        color: 'black',
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    subtitle: {
        marginTop: 24,
        textAlign: "center",
        fontSize: 25,
        color: 'black',
        textTransform: "uppercase",
        fontWeight: "500"
    }
});