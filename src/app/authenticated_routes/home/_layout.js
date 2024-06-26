import {Stack, usePathname} from "expo-router";
import React from "react";
import {Drawer} from "expo-router/drawer";

const HomeRootLayout = () => {
    const pathname = usePathname();
    const [showParentHeader, setShowParentHeader] = React.useState(true)

    React.useEffect(() => {
        setShowParentHeader(pathname === "/authenticated_routes/home/home_file");
    }, [pathname]);

    return (
        <>
            <Drawer.Screen
                options={{
                    headerShown: showParentHeader,
                }}
            />

        <Stack>
            <Stack.Screen
                name="home_file"
                options={{
                    headerShown: false,
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
        </>
    );
};

export default HomeRootLayout;
