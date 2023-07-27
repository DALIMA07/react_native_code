/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from "react";
import { Button, Text, View } from "react-native";


const App=()=>{

  var name = "Neel";

  const [change, setChange] = useState("Anuj");
  const [age, setAge] = useState(20);

  function UpdateAge() {
    setAge(24);
  }

  function Update() {
      setChange("Anup")
  }

  return (
    <View style={{backgroundColor: "powderblue"}}>
        <Text style={{fontSize:30}}>Hello!!</Text>
        <Text style={{fontSize:30}}>{name}</Text>
        <Text style={{fontSize:30}}>{age}</Text>
        <Text style={{fontSize:30}}>{change}</Text>
        
        <View style={{ flexDirection: 'row', alignContent: 'space-between'}}>
          <Button title="Change name"  color={"orange"} onPress={Update}/>
          <Button title="Change Age" color={"green"} onPress={UpdateAge}/>
        </View>

    </View>
  )
}

export default App;
