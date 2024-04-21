import {StyleSheet} from 'react-native'
import React from 'react'
import DraggableMarkerMap from '../../components/DraggableMarkerMap'

const maps = () => {
    return (
        <DraggableMarkerMap initialLatitude={37.78825} initialLongitude={-122.4324}/>
        // <Image source={imagex} style={{
        //   width: "100%",
        //   flex : 1,
        //   resizeMode: "cover",
        // }}/>
    )
}

export default maps

const styles = StyleSheet.create({})