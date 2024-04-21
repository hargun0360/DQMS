import {ScrollView, View} from 'react-native'
import React from 'react'
import StandCard from '../components/StandCard'

const standing = () => {
    return (
        <ScrollView style={{flex: 1}}>
            {new Array(2).fill().map((_, index) => {
                return (
                    <View key={index.toString()} style={{paddingBottom: 5, paddingTop: 5, padding: 12}}>
                        <StandCard/>
                    </View>
                );
            })}
        </ScrollView>
    )
}

export default standing 