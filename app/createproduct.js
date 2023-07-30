import React, { useState } from "react";
import { TextInput, View, Image, ScrollView } from "react-native";

const Createproduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  console.log(name, price);

  const logo = {
    uri: "https://profile.canva.com/users/UAEz1ZqtSxI/avatars/9/50.jpg",
    width: 54,
    height: 54,
  };

  return (
    <ScrollView>
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
      <Image source={logo} />
    </ScrollView>
  );
};

export default Createproduct;
