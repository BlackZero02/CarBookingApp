import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function CarDetails({ route, navigation }) {
  const { carId } = route.params; // Get carId from route params
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const carRef = doc(db, 'cars', carId); // Reference to the car document
        const carSnap = await getDoc(carRef);

        if (carSnap.exists()) {
          setCar(carSnap.data()); // Set car details
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching car details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [carId]);

  const handleBookNow = async () => {
    try {
      const carRef = doc(db, 'cars', carId); // Reference to the car document

      // Check if the car is already booked
      if (true) {
        // Update the availability to false
        await updateDoc(carRef, {
          available: false, // Update the existing `available` field
        });
        navigation.navigate('BookingConfirmation', { carId }); // Navigate to BookingConfirmation
      } else {
        alert('This car is already booked or unavailable.');
      }
    } catch (error) {
      console.error('Error updating car availability:', error);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#003366" />
        <Text style={styles.loadingText}>Loading car details...</Text>
      </View>
    );
  }

  if (!car) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Car details not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Car Image */}
      <Image
        source={{ uri: car.image }}
        style={styles.carImage}
        resizeMode="cover"
      />

      {/* Car Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{car.name}</Text>
        <Text style={styles.model}>Model: {car.model}</Text>
        <Text style={styles.price}>Price: ${car.price}</Text>
        <Text style={styles.description}>{car.description}</Text>

        {/* Book Now Button */}
        <TouchableOpacity style={styles.bookButton} onPress={handleBookNow}>
          <Text style={styles.bookButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f4f6', // Light Gray background for the container
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  errorText: {
    fontSize: 18,
    color: '#e74c3c',
  },
  carImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#003366', // Dark Blue for the title
    marginBottom: 8,
  },
  model: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff', // Dark Blue for the price
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
  bookButton: {
    backgroundColor: '#003366', // Dark Blue for the button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: 16,
    color: '#fff', // White text for the button
    fontWeight: 'bold',
  },
});
