import {Alert, Image, Pressable, ScrollView, StyleSheet, Text, View,} from "react-native";
import React from "react";
import {router, useLocalSearchParams} from "expo-router";
import shop from "../../../assets/x.jpg";
import RazorpayCheckout from "react-native-razorpay";
import imagex from "../../../assets/xx.png";

const StoreInfo = () => {
    const {id} = useLocalSearchParams();
    const razorpay_payment_id = process.env.EXPO_PUBLIC_RZ_PUBLIC_KEY;
    const handleModal = () => {
        Alert.alert("Hey Hargun!", "Are you sure you want to stand in Queue?", [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
            },
            {
                text: "OK",
                onPress: () => {
                    var options = {
                        description: "Credits towards consultation",
                        image: "https://i.imgur.com/3g7nmJC.jpg",
                        currency: "INR",
                        key: razorpay_payment_id,
                        amount: "500",
                        name: "Qwait",

                        prefill: {
                            email: "gaurav.kumar@example.com",
                            contact: "7985719583",
                            name: "Hargun Singh",
                        },
                        theme: {color: "#53a20e"},
                    };
                    RazorpayCheckout.open(options)
                        .then((data) => {
                            alert(`Success: ${data.razorpay_payment_id}`);
                            router.push("/standing");
                        })
                        .catch((error) => {
                            // handle failure
                            console.log(error);
                            alert(`Error: ${error.code} | ${error.description}`);
                        });
                },
            },
        ]);
    };

    return (
        <ScrollView style={styles.container}>
            <Image source={shop} style={styles.storeImage}/>
            <View style={styles.content}>
                <Text style={styles.headerText}>Store Description</Text>
                <Text style={styles.descriptionText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                    interdum...
                </Text>

                <View style={styles.mapContainer}>
                    {/* <DraggableMarkerMap
            initialLatitude={37.78825}
            initialLongitude={-122.4324}
          /> */}
                    <Image source={imagex} style={styles.storeImage}/>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.infoBox}>
                        <Text style={styles.infoHeader}>Distance</Text>
                        <Text style={styles.infoContent}>5 km</Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.infoHeader}>Customers</Text>
                        <Text style={styles.infoContent}>20 people</Text>
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.infoHeader}>Counters</Text>
                        <Text style={styles.infoContent}>3 active</Text>
                    </View>
                </View>

                <Text style={styles.averageTime}>Average Wait Time: 15 min</Text>

                <Pressable style={styles.button} onPress={handleModal}>
                    <Text style={styles.buttonText}>Join Queue</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default StoreInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    storeImage: {
        width: "100%",
        height: 200, // Adjust the height as needed
        resizeMode: "cover",
    },
    content: {
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    descriptionText: {
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
        marginBottom: 16,
    },
    mapContainer: {
        height: 200,
        borderRadius: 8,
        overflow: "hidden",
        marginBottom: 16,
    },
    infoContainer: {
        marginBottom: 16,
    },
    infoBox: {
        marginBottom: 8,
    },
    infoHeader: {
        fontSize: 18,
        fontWeight: "600",
        color: "#333",
    },
    infoContent: {
        fontSize: 16,
        color: "#666",
    },
    averageTime: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 16,
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 6,
        alignItems: "center",
        marginBottom: 16,
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
});
