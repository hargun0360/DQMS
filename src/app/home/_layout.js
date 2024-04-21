import {Stack} from "expo-router";

const HomeRootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home_file"
        options={{
          headerShown: false,
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: true,
          headerTitle: "Arora Brothers",
        }}
      />
    </Stack>
  );
};

export default HomeRootLayout;
