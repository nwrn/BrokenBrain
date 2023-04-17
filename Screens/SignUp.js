import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';

export default function SingUp({navigation }) {
  return (
    <View style={styles.singUpTitle}>
      <MaterialIcons.Button
        name="arrow-back-ios"
        size={40}
        color="#000"
        backgroundColor="transparent"
        underlayColor="transparent"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.singUpText}>Sign Up</Text>

      <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Nome
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Sobrenome
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Email
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Número Celular
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Senha
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.inputView}> 
                <Text style={styles.textAboveInput}>
                    Repita a Senha
                </Text>
                <TextInput
                    placeholder='Digite'
                    placeholderTextColor='#000000'
                />

                <View style={styles.viewLines}/>

            </View>

            <View style={styles.viewPress}>
                <Pressable style={styles.stylePress}>
                    <Text style={styles.textPress}>Próximo</Text>
                </Pressable>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  singUpTitle: {
    paddingTop: 50,
    paddingLeft: 20,
  },
  singUpText: { 
    fontSize: 45,
    fontWeight: '300',
    marginTop: 15,
  },
  inputView:{
    paddingTop: 25,
  },
  textAboveInput: {
    paddingBottom: 15,
    color: '#c2c2c2'
  },
  viewLines: {
    marginTop: 15,
    width: 350,
    height: 1,
    backgroundColor: '#000000'
  },
  viewPress: {
    paddingLeft: 30,
    paddingTop: 30
  },
  stylePress: {
    backgroundColor: '#000000',
    height: 70,
    width: 280,
    borderRadius: 20, 
    alignItems: 'center',
  },
  textPress: {
    fontSize: 30,
    color: '#fff',
    margin: 15,
    letterSpacing: 5
  }
});
