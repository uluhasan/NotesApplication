import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import post from "../assets/images/post.png";
import { useRouter } from "expo-router";

const  Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={post} style={styles.images}/>
      <Text style={styles.title}>Welcome To Notes App</Text>
      <Text style={styles.subtitle}>Capture your toughts anytime, anywhere.</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push('/notes')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  images: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
