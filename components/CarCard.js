import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function CarCard({ car, navigation }) {
  const handleViewDetails = () => {
    navigation.navigate('CarDetails', { carId: car.id });
  };

  return (
    <View style={styles.card}>
      {/* Image Section */}
      <Image
        source={{ uri: car.image }}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Details Section */}
      <View style={styles.info}>
        <Text style={styles.title}>{car.name}</Text>

        {/* Additional Car Details */}
        <Text style={styles.model}>Model: {car.model}</Text>
        <Text style={styles.year}>Year: {car.year}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {car.description}
        </Text>

        {/* Availability */}
        <Text style={styles.availability}>
          {car.available ? 'Available' : 'Not Available'}
        </Text>

        <View style={styles.row}>
          <Text style={styles.price}>${car.price}</Text>
          <TouchableOpacity style={styles.button} onPress={handleViewDetails}>
            <Text style={styles.buttonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: '#fff', // Light background for card
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  info: {
    padding: 16,
    backgroundColor: '#f3f4f6', // Light Gray background for the info section
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366', // Dark Blue for the title
    marginBottom: 6,
  },
  model: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
  year: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  availability: {
    fontSize: 14,
    color: '#28a745', // Green for available
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff', // Dark Blue for price
  },
  button: {
    backgroundColor: '#003366', // Dark Blue for the button
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff', // White text for button
    fontSize: 14,
    fontWeight: '600',
  },
});
