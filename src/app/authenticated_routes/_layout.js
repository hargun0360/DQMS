import React from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Drawer} from "expo-router/drawer";

const Layout = () => {

    // const [state, setState] = useState(false);
    // const route = useSegments();
    //
    // useEffect(() => {
    //     console.log(route);
    //     if (route && route.length > 0) {
    //         if (route.length === 2 && route[0] === 'home' && route[1] === '[id]') {
    //             setState(true);
    //         } else {
    //             setState(false);
    //         }
    //     }
    // }, [route]);

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
                <Drawer.Screen
                    name="home"
                    options={{
                        drawerLabel: "Home",
                        title: "All Categories",
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
                    name="standing"
                    options={{
                        drawerLabel: "Standing Queues",
                        title: "Standing Queues",
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

export default Layout;
