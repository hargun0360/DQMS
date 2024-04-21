import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Card from '../../components/Card';

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            {new Array(5).fill().map((_, index) => {
                return <Card key={index.toString()}/>;
            })}
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    // Your styles will go here
});
