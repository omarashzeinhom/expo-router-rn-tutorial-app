import { Text, View, TouchableOpacity, Touchable } from "react-native";
import { useRouter, Link } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Home</Text>
      
      <Link href="/createproduct">Create Product</Link>

      <Text onPress={() => router.push("/updateproduct")}>Update Product</Text>
    </View>
  );
};

export default Home;
