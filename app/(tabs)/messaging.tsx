import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

interface Message {
  sender: string;
  message: string;
}

export default function App() {
  const [selectedContact, setSelectedContact] = useState<{ id: number; name: string } | null>(null);
  const [showConversation, setShowConversation] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Message[]>([]);

  const contacts = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
  ];

  const handleContactClick = (contact: { id: number; name: string }) => {
    setSelectedContact(contact);
    setShowConversation(true);
    // Simuler une conversation initiale avec un message de bienvenue
    setConversation([{ sender: 'John', message: 'Bonjour !' }]);
  };

  const renderItem = ({ item }: { item: { id: number; name: string } }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => handleContactClick(item)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage: Message = { sender: 'Me', message: message };
      setConversation([...conversation, newMessage]);
      setMessage('');
    }
  };

  const handleReturnToList = () => {
    setShowConversation(false);
    setSelectedContact(null);
    setConversation([]);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={100}>
      {showConversation && selectedContact && (
        <View style={styles.profileContainer}>
          <View style={styles.emptyProfilePic}>
            <Text style={styles.profileInitials}>{selectedContact.name.charAt(0)}</Text>
          </View>
          <Text style={styles.profileName}>{selectedContact.name}</Text>
        </View>
      )}
      {!showConversation && (
        <View style={styles.contactsContainer}>
          <Text style={styles.title}>Contacts</Text>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.contactsList}
          />
        </View>
      )}
      {showConversation && (
        <View style={styles.conversationContainer}>
          <TouchableOpacity onPress={handleReturnToList} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="green" />
          </TouchableOpacity>
          <FlatList
            data={conversation}
            renderItem={({ item }) => (
              <View style={[styles.message, item.sender === 'Me' ? styles.myMessage : styles.otherMessage]}>
                <Text style={styles.messageText}>{item.message}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.messageContainer}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
            />
            <TouchableOpacity onPress={handleSendMessage} style={[styles.sendButton, {backgroundColor: 'green'}]}>
              <Ionicons name="arrow-up" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </KeyboardAvoidingView>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contactsContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  contactsList: {
    flexGrow: 1,
  },
  contactItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#ffffff',
  },
  emptyProfilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  conversationContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  conversationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageContainer: {
    flexGrow: 1,
  },
  message: {
    maxWidth: '70%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#333333',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#c0e0c0',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  sendButton: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'green',
  },
});