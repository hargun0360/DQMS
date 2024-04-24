import React from "react";
import {Stack} from "expo-router";
import {Provider} from "react-redux";
import {store} from "../store/store";

const RootLayout = () => {
    return (<>
        <Provider store={store}>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false,
                        headerTitle: "Login",
                    }}

                />
                <Stack.Screen
                    name="otp"
                    options={{
                        headerShown: true,
                        headerTitle: "Verify OTP",
                    }}

                />
            </Stack>
        </Provider>
    </>);

};

export default RootLayout;
