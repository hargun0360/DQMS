import * as React from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import { Appbar, Drawer, Text } from "react-native-paper";

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [active, setActive] = React.useState("");
  const drawerAnimation = React.useRef(new Animated.Value(-250)).current;

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -250,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false);
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={toggleDrawer} />
        <Appbar.Content title="Qwait" />
      </Appbar.Header>
      <Animated.View
        style={[
          styles.drawerStyle,
          { transform: [{ translateX: drawerAnimation }] },
        ]}
      >
        <Appbar.Header>
          <Appbar.Action icon="close" onPress={toggleDrawer} />
          <Appbar.Content title="Qwait" />
        </Appbar.Header>
        <Drawer.Section>
          <Drawer.Section showDivider={false}>
            <Drawer.Item
              label="Scan Qr/Barcode"
              icon="barcode-scan"
              active={active === "first"}
              onPress={() => {
                setActive("first");
                closeDrawer();
              }}
            />
          </Drawer.Section>
          <Drawer.Item
            label="Service Providers"
            icon="office-building-marker-outline"
            active={active === "second"}
            onPress={() => {
              setActive("second");
              closeDrawer();
            }}
          />
          <Drawer.Item
            label="Maps"
            icon="google-maps"
            active={active === "third"}
            onPress={() => {
              setActive("third");
              closeDrawer();
            }}
          />
          <Drawer.Item
            label="My Favourite"
            icon="heart"
            active={active === "fourth"}
            onPress={() => {
              setActive("fourth");
              closeDrawer();
            }}
          />
          <Drawer.Item
            label="Recent Visits"
            icon="history"
            active={active === "fifth"}
            onPress={() => {
              setActive("fifth");
              closeDrawer();
            }}
          />
        </Drawer.Section>
        <Drawer.Section showDivider={false}>
          <Drawer.Item
            label="Settings"
            icon="cog"
            active={active === "sixth"}
            onPress={() => {
              setActive("sixth");
              closeDrawer();
            }}
          />
          <Drawer.Item
            label="Help and Feedback"
            icon="help-circle-outline"
            active={active === "seventh"}
            onPress={() => {
              setActive("seventh");
              closeDrawer();
            }}
          />
        </Drawer.Section>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: 250,
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MyComponent;
