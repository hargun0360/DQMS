import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import MyDrawer from "../src/Components/Drawer";
import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

// const _layout = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack>
//         <MyDrawer />
//         <Slot />
//       </Stack>
//     </SafeAreaView>
//   );
// };

// export default _layout;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" 
          options={{
            drawerLabel: "Index",
            title: "overview",
          }}
        />
         <Drawer.Screen
          name="scan"
          options={{
            drawerLabel: "Scan Qr/Barcode",
            title: "Scan QR",
          }}
        />
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Home",
            title: "All Categories",
          }}
        />
        <Drawer.Screen
          name="my-favourite"
          options={{
            drawerLabel: "My Favorite",
            title: "Favorites",
          }}
        />
        <Drawer.Screen
          name="maps"
          options={{
            drawerLabel: "Maps",
            title: "Nearby Stores",
          }}
        />
        <Drawer.Screen
          name="recent-visit"
          options={{
            drawerLabel: "Recent Visits",
            title: "Recent Visits",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
