import React,{useEffect,useState} from "react";
import {View,Text,StyleSheet} from "react-native";
const DataPage=(props)=>{
    const [data,setData]=useState([]);
    const [loading,isLoading]=useState(false)
        useEffect(()=>{
            fetch('http://192.168.43.171:3000/home')
            .then((response) => response.json())
            .then((json) => {
                setData({data:json.login[0]})
                setTimeout(()=>{
                    isLoading(true);
                })
            },500)
            .catch((error) => {
                console.error(error);
            });
    },[1])
    return(
        <View style={styles.view}>
            {loading===true&&
                <View>
                       <Text>username : {data.data["username"]}</Text>
                        <Text>Name : {data.data["name"]}</Text>
                        <Text>Email : {data.data["email"]}</Text>
                        <Text>Address : {data.data["address"]}</Text>
                        <Text>Phone : {data.data["phone"]}</Text>

                </View>
            }
        </View>
    )
} 
const styles = StyleSheet.create({
    view:{
        flex:1,
        padding:20,
        justifyContent:"center"
    }
});
export default DataPage;