import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useRef, useState} from 'react'
import useAuth from '../hooks/useAuth'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth'
import { getAuth, connectAuthEmulator  } from '@firebase/auth'

// connectAuthEmulator(getAuth(), "http://localhost:9099");

export const RegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const auth = getAuth()

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((s)=>console.log(s))
        .catch((e)=>console.log(e))
    }

  return (
    <View>
        <View style={{alignItems:'center'}}>
            <Text style={style.labelText}>Your email</Text>
            <TextInput textContentType='emailAddress' style={style.input} onChangeText={setEmail}/>
        </View>
        <View style={{alignItems:'center', marginTop:20}}>
            <Text style={style.labelText}>your password ...</Text>
            <TextInput textContentType='password' style={style.input} onChangeText={setPassword}/>
        </View>

        <TouchableOpacity style={style.submitButton} onPress={register}>
            <Text style={style.buttonText}>Register</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    labelText: {
        fontSize:12, 
        color:'gray'
    },
    input: {
        borderBottomWidth:1, 
        width:250, 
        borderColor:'#ddd', 
        textAlign:'center'
    },
    submitButton: {
        marginVertical:20, 
        backgroundColor:'#1b3',
        width:250, 
        alignItems:'center', 
        paddingVertical:4, 
        borderRadius:15
    },
    buttonText: {
        fontSize:20, 
        color:"white", 
        fontWeight:'bold'
    }
})