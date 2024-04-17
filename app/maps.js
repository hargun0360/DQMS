import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DraggableMarkerMap from '../src/Components/DraggableMarkerMap'

const maps = () => {
  return (
    <DraggableMarkerMap initialLatitude={37.78825} initialLongitude={-122.4324} />
  )
}

export default maps

const styles = StyleSheet.create({})