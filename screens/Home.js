import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { db } from '../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import { auth } from '../config/firebase.js';  // Import auth for signOut
import { signOut } from 'firebase/auth';  // Import signOut
import CarCard from '../components/CarCard';

export default function Home({ navigation }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'cars'));
        const carList = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCars(carList);
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);  // Sign out the user
      navigation.navigate('Login');  // Navigate back to Login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#003366" />  {/* Dark Blue */}
        <Text style={styles.loadingText}>Fetching car listings...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Cars</Text>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarCard car={item} navigation={navigation} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
      
      {/* Logout Button */}
      <Button title="Logout" onPress={handleLogout} color="#003366" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',  // Light Gray
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',  // Dark Blue
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',  // Light Gray
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    color: '#555',  // Dark Gray
  },
});
