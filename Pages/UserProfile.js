import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const staticImage = require("../assets/favicon.png");
export default function UserProfile() {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: 20,
          fontSize: 27,
          color: "red",
          textAlign: "center",
        }}
      >
        UserProfile
      </Text>
      <ImageBackground
        source={staticImage}
        style={styles.ImageBackground}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    marginTop: 12,
    width: 210,
    height: 210,
    paddingBottom: 50,
    paddingTop: 12,
    alignItems: "center",
  },
});
