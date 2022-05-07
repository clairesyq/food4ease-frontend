import styles from './helpers/styles.js';
import { useState } from 'react';
import { register } from '../apis/api.js';
import { emailValidator, nameValidator, passwordValidator, roleValidator } from './helpers/validators.js';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Signup({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [username, setName] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [role, setRole] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const nameError = nameValidator(username.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const roleError = roleValidator(role.value)
    if (emailError || nameError || passwordError || roleError) {
      setName({ ...username, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setRole({ ...password, error: roleError })
      return
    } else {
      register(email.value, username.value, password.value, role.value)
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
      <Text style={styles.topic}>Create an Account</Text>

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
          style={styles.inputText}
          placeholder="Name..."
          placeholderTextColor="#797979"
          onChangeText={text => setName({ value: text, error: '' })}
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

      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="donor or receiver..."
          placeholderTextColor="#797979"
          onChangeText={text => setRole({ value: text, error: '' })}
          autoCapitalize="none"
        />
      </View>

      <Text style={styles.error}>
        {email.error}{"\n"}
        {username.error}{"\n"}
        {password.error}{"\n"}
        {role.error}
      </Text>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={onSignUpPressed}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <Text style={styles.row}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Signin')}>
          <Text style={styles.link}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

