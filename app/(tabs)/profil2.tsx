import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TextInput } from 'react-native';

const ProfileAndAddPlantScreen = () => {
    const [showProfile, setShowProfile] = useState(true);
    const [showAddPlant, setShowAddPlant] = useState(false);

    const currentUser = { name: "John Doe", email: "john@example.com", profile_photo_path: "https://via.placeholder.com/150" }; // Vous devrez remplacer ces données par celles de votre propre application

    const handleLogout = async () => {
        // Logique de déconnexion
    };

    const handleAddPlant = async () => {
        // Logique d'ajout de plante
    };

    const handleShowProfile = () => {
        setShowProfile(true);
        setShowAddPlant(false);
    };

    const handleShowAddPlant = () => {
        setShowProfile(false);
        setShowAddPlant(true);
    };

    return (
        <View style={styles.container}>
            {showProfile && (
                <View style={styles.section}>
                    <Image source={{ uri: currentUser?.profile_photo_path || "https://via.placeholder.com/150" }} style={styles.image} />
                    <Text style={styles.title}>{currentUser?.name}</Text>
                    <Text>Email: {currentUser?.email}</Text>
                    <Button title="Voir Mes Plantes" onPress={handleShowAddPlant} />
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            )}
            {showAddPlant && (
                <View style={styles.section}>
                    <Text style={styles.title}>Créer une plante</Text>
                    <TextInput placeholder="Nom de la plante" style={styles.input} />
                    <TextInput placeholder="Description de la plante" style={[styles.input, styles.textarea]} multiline />
                    {/* Gérer l'image de la plante */}
                    <Button title="Publier" onPress={handleAddPlant} />
                    <Button title="Retour" onPress={handleShowProfile} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    section: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    textarea: {
        height: 100,
    },
});

export default ProfileAndAddPlantScreen;
