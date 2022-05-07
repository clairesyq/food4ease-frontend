import styles from './helpers/styles.js';
import { useState } from 'react';
import { login } from '../apis/api.js';
import { emailValidator, passwordValidator } from './helpers/validators.js';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Signin({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignInPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    } else {
      login(email.value, password.value)
        .then((res) => navigation.reset({
          index: 0,
          routes: [{ name: 'Map' }],
        }))
        .catch((err) => console.log(err));
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/img/icon.png')}
      />
      <Text style={styles.topic}>Sign In</Text>

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#797979"
          onChangeText={text => setEmail({ value: text, error: '' })}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#797979"
          onChangeText={text => setPassword({ value: text, error: '' })}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.error}>
        {email.error}{"\n"}
        {password.error}
      </Text>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={onSignInPressed}>
        <Text style={styles.loginText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.row}>Don’t have an account yet? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

