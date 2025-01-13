import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function BookingConfirmation({ route, navigation }) {
  const { carId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Confirmation</Text>
      <Text style={styles.confirmationText}>
        You have successfully booked the car with ID: <Text style={styles.carId}>{carId}</Text>
      </Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Navigate back to previous screen
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6', // Light Gray background
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366', // Dark Blue for title
    marginBottom: 15,
  },
  confirmationText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  carId: {
    fontWeight: 'bold',
    color: '#007bff', // Dark Blue for car ID
  },
  button: {
    backgroundColor: '#003366', // Dark Blue for button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
