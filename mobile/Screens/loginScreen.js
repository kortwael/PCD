
import React,{useState , useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image} from 'react-native';
import axios from 'axios';
import {useForm} from 'react-hook-form'
import { Avatar } from 'react-native-paper';
import { NavigationHelpersContext } from '@react-navigation/core';

const loginScreen = ({navigation}) => {

    const { register, handleSubmit, setValue } = useForm()
    const[erruer,setErreur] = useState("")

    useEffect(() => {
        register("Username")
        register("Password")
    }, [register])

    const onSubmit = async(data) => {
        const fromdata={email:data.Username,pwd :data.Password}
        axios.post('http://127.0.0.1:5000/get_doctor',fromdata)
        .then((res)=>{
            if(res.data.msg) setErreur("Account does not exit !")
            else{
                navigation.navigate("Profile",res.data)
            }
        }).catch(function(err){ console.log(err);}
        )
    }

    return (
        <View style={styles.container}>
            <Avatar.Image size={250} source={require('../assets/logo.png')} />
            <Text style={styles.logo}>iCare</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Username..."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => { setValue("Username", text) }}
                />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={text => { setValue("Password", text) }}
                />
            </View>
            <Text style={styles.erreur}> {erruer} </Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.loginText}>L O G I N</Text>
            </TouchableOpacity>
        </View>
    )
}

export default loginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009ABB',
        alignItems: 'center',
        justifyContent: 'center',
    },
    erreur: {
        color: "red"
    },
    inputView: {
        width: "80%",
        backgroundColor: "#F0F4F5",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#333333"
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#09425A",
        marginBottom: 40
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#AABEC6",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
});


