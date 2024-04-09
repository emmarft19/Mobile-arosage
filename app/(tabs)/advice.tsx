import { StyleSheet, TextInput, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function TabAdviceScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Advice</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Recherche..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.title}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    width: '80%',
  },
});
