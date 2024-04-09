import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Profils</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Mes Plantes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Text style={styles.tabText}>Paramètres</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    backgroundColor: '#22c55e',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    width: 200,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});