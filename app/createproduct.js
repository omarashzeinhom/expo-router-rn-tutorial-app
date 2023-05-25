import React,{useState} from 'react';
import { TextInput } from 'react-native';

const Createproduct = () => {
  const [name, setName]= useState("");
  const [price, setPrice]= useState("");
  console.log(name, price);
  return (
    <div>
         <TextInput
          placeholder="Name"
          onChange={(event) => {
            setName(event.nativeEvent.text);
          }}
        />
           <TextInput
          placeholder="Price"
          onChange={(event) => {
            setPrice(event.nativeEvent.text);
          }}
        />
    </div>
  )
}

export default Createproduct
