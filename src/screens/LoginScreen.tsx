import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import React from 'react';
import Header from '../components/Header';


export default function LoginScreen() {
  const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState("");

  //hide/show password
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <>
        <StatusBar style="light" />
        <KeyboardAvoidingView behavior='position'>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                  <View className='bg-violet-600 w-full h-72 justify-center items-center'>
                    <Header title='SPACECRAFT'/>
                  </View>
                  <View className='p-12'>
                    <TextInput
                      label="Email"
                      value={text}
                      onChangeText={text => setText(text)}
                      theme={{ colors: { primary: 'black', }}}
                      keyboardType='email-address'
                      mode='outlined'
                    />
                    <TextInput className='mt-10'
                      label="Password"
                      value={password}
                      onChangeText={password => setPassword(password)}
                        theme={{ colors: { primary: 'black', }}}
                        keyboardType='default'
                      secureTextEntry={isPasswordVisible}
                      mode='outlined'
                      right={<TextInput.Icon icon={isPasswordVisible ? 'eye-off' : 'eye' } onPress={ ()=>{ setIsPasswordVisible((old) => !old )}}/>}
                    />
                    <Button className='mt-10 bg-violet-600' mode="contained" onPress={() => console.log('Pressed')}>
                      Login
                    </Button>
                    <Text className='mt-5 text-gray-600'>by login you accept the Terms and conditions</Text>
                  </View>
              </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    </>
  );
}