import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import MyComponent from "./src/Components/Drawer";

export default function App() {
  return (
    <>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <MyComponent />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
