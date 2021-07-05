import React,{useState} from 'react';
import { StyleSheet,ScrollView, View, Image, CheckBox,Text,TouchableOpacity } from 'react-native';
import FloatingLabelInput from '../components/FloatingInput';
const LoginView =(props)=> {
  const [isSelected, setSelection] = useState(false);
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const send=()=>{
    fetch('http://192.168.43.171:3000/login/',
   {  method: 'POST',
      headers: {    Accept: 'application/json',
      'Content-Type': 'application/json'  },
      body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    })
  });
  setTimeout(()=>{
    check();
  },1000)
  }
  const check=()=>{
    fetch('http://192.168.43.171:3000/home')
            .then((response) => response.json())
            .then((json) => {
                if(json.login.length!=0){
                    props.navigation.navigate("Data")
                }
            })
            .catch((error) => {
                console.error(error);
            });
  }
  return (
    <ScrollView style={styles.container}>
    <View style={styles.topImageView}>
     <Image source={require("../assets/login.png")} style={{height:200,width:200}}/>  
      </View>
      <View style={{padding:20,flex:0.5}}>
      <FloatingLabelInput label="Email" required onValueChange={(val)=>{setemail(val)}}/>
      <FloatingLabelInput label="Password" required type="password" onValueChange={(val)=>{setPassword(val)}}/>
      <View style={styles.forgotView}> 
        <View style={styles.rememberme}>
        <CheckBox value={isSelected}
          onValueChange={setSelection}
        /><Text>Remember me</Text>
        </View>
        <Text>Forgot Password</Text>
      </View>
      <View style={{marginTop:"15%"}}>
        <TouchableOpacity style={styles.login} onPress={()=>{send();}}>
          <Text style={{fontSize:20,color:"white",textAlign:"center"}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:1,borderColor:"lightgrey",padding:10}} onPress={()=>{props.navigation.navigate("Register")}}>
          <Text style={{fontSize:20,textAlign:"center"}}>Sign up</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:"15%"}}>
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
  login:{
    backgroundColor:"#301846",
    padding:10,
    marginBottom:25
  }
});
export default LoginView;