import {Pressable, SafeAreaView, Text} from "react-native";
import {router} from 'expo-router';

export default function index() {
    return <SafeAreaView style={{
        flex: 1,
        marginTop: 100
    }}>
        {/*<Login/>*/}
        <Pressable onPress={() => {
            router.replace("/authenticated_routes")
        }}>
            <Text>Click here</Text>
        </Pressable>
    </SafeAreaView>;
}

