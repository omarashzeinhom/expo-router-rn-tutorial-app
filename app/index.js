import { Text, View, TouchableOpacity, Touchable,StyleSheet } from "react-native";
import { useRouter, Link } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View title="home" style={styles.container}> 
      <Text style={styles.text}>Home</Text>
      
      <Link href="/createproduct">Create Product</Link>

      <Text onPress={() => router.push("/updateproduct")}>Update Product</Text>
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
