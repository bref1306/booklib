import {KeyboardAvoidingView, Platform, StyleSheet, Text, View} from 'react-native';
import {PoppinsText} from "../../components/StyledText";
import {Bubble} from "../../components/CircleBubble";
import Layout from "../../constants/Layout";
import {ButtonPrimary, ButtonSecondary} from "../../components/Button";
import {Error, Form, Input, InputGroup, Label} from "../../components/form/Form";
import {useContext, useState} from "react";
import {AuthContext} from "../../store/auth";
import axios from "axios";
import {ErrorProps} from "../../types";

export default function Login ({navigation}: any) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<ErrorProps[]>([]);

    const auth = useContext(AuthContext);

    const handleSubmit = async () => {
        setErrors([]);

        await axios.post("http://192.168.127.66:3000/user/login", {email, password})
            .then((result) => {
                auth.connect(result.data);
            })
            .catch((error) => {
                if(error.response) {
                    if(error.response.data.errors) {
                        setErrors(error.response.data.errors);
                    }
                }
            })
    }

    return (
        <View style={styles.main}>
            <Bubble radius={Layout.window.width * 1.5} background={"#E0E0E0"} position={{x: Layout.window.width,y: 28}}/>
            <Bubble radius={Layout.window.width * 1.5} background={"#E0E0E0"} position={{x: 50 ,y: Layout.window.height - 64}}/>
            <Bubble radius={Layout.window.width - 128} background={"#C5C5C5"} position={{x: 60,y:  Layout.window.height/2}}/>
            <View style={{marginTop: 42,flex: 0}}>
                <PoppinsText style={styles.title}>BookLib</PoppinsText>
                <PoppinsText style={styles.subtitle}>Se Connecter</PoppinsText>
            </View>
            <Form>
                <InputGroup>
                    <Label>Adresse mail</Label>
                    <Error field={"email"}  errors={errors} />
                    <Input placeholder={"at@gmail.com"} keyboardType={"email-address"} onChangeText={setEmail} />
                </InputGroup>
                <InputGroup>
                    <Label>Mot de passe</Label>
                    <Error field={"password"} errors={errors} />
                    <Input placeholder={"15489"} keyboardType={"default"} secureTextEntry={true} onChangeText={setPassword}/>
                </InputGroup>
            </Form>
            <View>
                <ButtonPrimary text="Se Connecter" action={() => handleSubmit()}/>
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