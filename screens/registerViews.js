import React,{useState} from 'react';
import { StyleSheet,ScrollView, View, Image, CheckBox,Text,TouchableOpacity } from 'react-native';
import FloatingLabelInput from '../components/FloatingInput';
const RegisterScreen =(props)=> {
  const [isSelected, setSelection] = useState(false);
  const [username, setUsername] = useState('');
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const send=()=>{
    console.log( `username: ${username},
    name: ${name},
    email: ${email},
    password: ${password},
    address: ${address},
    phone: ${phone}`)
    fetch('http://192.168.43.171:3000/register/',
   {  method: 'POST',
      headers: {    Accept: 'application/json',
      'Content-Type': 'application/json'  },
      body: JSON.stringify({
      username: `${username}`,
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
      address: `${address}`,
      phone: `${phone}`,
    })});
  }
  return (
    <ScrollView style={styles.container}>
    <View style={styles.topImageView}>
     <Image source={require("../assets/register.png")} style={{height:100,width:260}}/>  
      </View>
      <View style={{padding:20,flex:0.5}}>
      <FloatingLabelInput label="Username" required onValueChange={(val)=>{setUsername(val)}}/>
      <FloatingLabelInput label="Name" required onValueChange={(val)=>{setname(val)}}/>
      <FloatingLabelInput label="Email" type="email" required onValueChange={(val)=>{setEmail(val)}}/>
      <FloatingLabelInput label="Password" required type="password" onValueChange={(val)=>{setPassword(val)}}/>
      <FloatingLabelInput label="Address" required onValueChange={(val)=>{setAddress(val)}}/>
      <FloatingLabelInput label="Mobile" type="phone" required onValueChange={(val)=>{setPhone(val)}}/>
      <View style={styles.forgotView}> 
        <View style={styles.rememberme}>
        <CheckBox value={isSelected}
          onValueChange={setSelection}
        />
        <Text>I agree with terms and conditions</Text>
        </View>
      </View>
      <View style={{marginTop:"10%"}}>
        <TouchableOpacity style={styles.signup} onPress={()=>{send();props.navigation.navigate('Login')}}>
          <Text style={{fontSize:20,color:"white",textAlign:"center"}}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{props.navigation.navigate("Login")}}>
          <Text style={{textAlign:"center",textDecorationLine: 'underline'}}>Already have an account? Sign in.</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:"4%",marginBottom:"4%"}}>
      <Text>Terms of use. Privacy policy</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  topImageView:{
    marginTop:40,
    alignItems:"center",
    justifyContent:"center"
  },
  rememberme:{
    flexDirection:"row",
    alignItems:"center"
  },
  forgotView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10
  },
  signup:{
    backgroundColor:"#301846",
    padding:10,
    marginBottom:25
  }
});
export default RegisterScreen;