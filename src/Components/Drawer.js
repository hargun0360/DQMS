import * as React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Appbar, Drawer, Text } from 'react-native-paper';

const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [active, setActive] = React.useState('');
  const drawerAnimation = React.useRef(new Animated.Value(-250)).current; // Initial position off-screen

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
      toValue: 0, // Target value
      duration: 300, // Duration of animation
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: -250, // Move back off-screen
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setIsDrawerOpen(false); // Only set state after animation completes
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={toggleDrawer} />
        <Appbar.Content title="Qwait" />
      </Appbar.Header>
      <Animated.View style={[styles.drawerStyle, { transform: [{ translateX: drawerAnimation }] }]}>
        <Appbar.Header>
          <Appbar.Action icon="close" onPress={toggleDrawer} />
          <Appbar.Content title="Qwait" />
        </Appbar.Header>
        <Drawer.Section>
          <Drawer.Item
            label="Scan Qr/Barcode"
            active={active === "first"}
            onPress={() => setActive("first")}
          />
          <Drawer.Item
            label="Service Providers"
            active={active === "second"}
            onPress={() => setActive("second")}
          />
          <Drawer.Item
            label="Maps"
            active={active === "third"}
            onPress={() => setActive("third")}
          />
          <Drawer.Item
            label="My Favourite"
            active={active === "fourth"}
            onPress={() => setActive("fourth")}
          />
          <Drawer.Item
            label="Recent Visits"
            active={active === "fifth"}
            onPress={() => setActive("fifth")}
          />
        </Drawer.Section>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    width: 250,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  },
});

export default MyComponent;
