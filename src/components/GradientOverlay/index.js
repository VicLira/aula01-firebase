import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export function GradientOverlay() {
  return (
    <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={estilo.background}
      />
  )
}

const estilo = StyleSheet.create ({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        bottom: 0,
    },  
})
