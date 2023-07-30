import { FlatList, Text, View, TouchableOpacity, Touchable,StyleSheet } from "react-native";
import { useRouter, Link } from "expo-router";


const Products = () =>{
  return (
    <View>
      <FlatList
      data={[
        {key: "Product 1",
         price: 29
      },
      {key: "Product 2",
         price: 30
      },
      {key: "Product 3",
         price: 35
      },
      {key: "Product 4",
         price: 45
      },
      {key: "Product 5",
         price: 50
      },
      ]}
      renderItem={({item})=> <Text style={styles.text}>{item.key}</Text>}
      />

    </View>
  )
}

const Home = () => {
  const router = useRouter();
  return (
    <View title="home" style={styles.container}> 
      <Text style={styles.text}>Home</Text>
      
      <Link href="/createproduct">Create Product</Link>

      <Text onPress={() => router.push("/updateproduct")}>Update Product</Text>
    <Products/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    color: "white",
  }, 
  text:{
    color: "white",
  }
})

export default Home;
