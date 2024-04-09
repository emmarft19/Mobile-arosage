import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from 'react-native';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  isFocused: boolean;
}) {
  const { name, color, isFocused } = props;
  return (
    <FontAwesome
      name={name}
      size={24}
      color={isFocused ? 'white' : '#ccc'} 
    />
  );
}
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: { backgroundColor: '#0d5227' },
        headerShown: useClientOnlyValue(false, true),
        tabBarLabelStyle: { color: 'white' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Plantes',
          tabBarIcon: ({ color }) => <FontAwesome name="leaf" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="advice"
        options={{
          title: 'Notes',
          tabBarIcon: ({ color }) => <FontAwesome name="sticky-note" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="photos"
        options={{
          title: 'Photos',
          tabBarIcon: ({ color }) => <FontAwesome name="camera" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="messaging"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color }) => <FontAwesome name="envelope" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
