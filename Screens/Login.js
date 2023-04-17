import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import React from 'react';
import SingUp from './SignUp';

export default function Login({navigation}){

    return(
        <View>
            <View  style={styles.loginTitle}>
                <Text style={styles.loginText}>
                    Log In
                </Text>
            </View>

            <View style={styles.inputViewNome}> 
                <Text style={styles.textAboveInput}>
                    Usuário
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputViewEmail}> 
                <Text style={styles.textAboveInput}>
                    Email
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>
            
                <View style={styles.textUnderInput}>
                    <Text style={styles.textSideCadastro}>Não tem cadastro?</Text>
                    <Pressable style={styles.pressCadastro} onPress={() => navigation.navigate('SingUp')}>
                        <Text style={styles.pressText}>
                                Cadastre-se!
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.viewPressEntrar}>
                    <Pressable style={styles.pressEntrar} onPress={SingUp}> 
                        <Text style={styles.textPressEntrar}>Entrar</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    loginTitle: {
        paddingTop: 180,
        alignItems: 'center'
    },
    loginText: {
        fontSize: 55,
        fontWeight: '300',
    },
    inputViewNome:{
        padding: 50,
        paddingTop: 90,
    },
    textAboveInput: {
        paddingBottom: 15,
        color: '#c2c2c2'
    },
    viewLines: {
        marginTop: 15,
        width: 300,
        height: 1,
        backgroundColor: '#000000'
    },
    inputViewEmail:{
        paddingLeft: 50,
    },
    textUnderInput: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 15,
    },
    pressCadastro:{
        paddingLeft: 10,
    },
    textSideCadastro:{
        color: '#c2c2c2'
    },
    pressText: {
        fontWeight: 'bold'
    },
    viewPressEntrar: {
        paddingTop: 55,
    },
    pressEntrar: {
        backgroundColor: '#000000',
        height: 55,
        width: 290,
        borderRadius: 20,
        alignItems: 'center',
    },
    textPressEntrar: {
        margin: 10,
        color: '#ffffff',
        fontSize: 25,
        letterSpacing: 5
    }
})
