// insert.js

import { firebase } from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

// Car records data
const carRecords = [
    {
      id: "car1",
      name: "Toyota Camry",
      model: "2021",
      year: 2021,
      price: 35000,
      image: "https://www.carsguide.com.au/car-database/toyota/camry/2021/images/toyota-camry-2021.jpg",
      description: "A reliable and comfortable sedan with great fuel economy.",
      available: true
    },
    {
      id: "car2",
      name: "Honda Accord",
      model: "2022",
      year: 2022,
      price: 38000,
      image: "https://www.carsguide.com.au/car-database/honda/accord/2022/images/honda-accord-2022.jpg",
      description: "A sleek and spacious sedan perfect for long drives.",
      available: false
    },
    {
      id: "car3",
      name: "Ford Mustang",
      model: "2021",
      year: 2021,
      price: 45000,
      image: "https://www.carsguide.com.au/car-database/ford/mustang/2021/images/ford-mustang-2021.jpg",
      description: "A classic American muscle car with a powerful engine.",
      available: true
    },
    {
      id: "car4",
      name: "Chevrolet Camaro",
      model: "2020",
      year: 2020,
      price: 40000,
      image: "https://www.carsguide.com.au/car-database/chevrolet/camaro/2020/images/chevrolet-camaro-2020.jpg",
      description: "A bold and aggressive sports car with sharp handling.",
      available: true
    },
    {
      id: "car5",
      name: "BMW 3 Series",
      model: "2022",
      year: 2022,
      price: 50000,
      image: "https://www.carsguide.com.au/car-database/bmw/3-series/2022/images/bmw-3-series-2022.jpg",
      description: "A luxury sedan offering a perfect blend of performance and comfort.",
      available: false
    },
    {
      id: "car6",
      name: "Audi A4",
      model: "2021",
      year: 2021,
      price: 45000,
      image: "https://www.carsguide.com.au/car-database/audi/a4/2021/images/audi-a4-2021.jpg",
      description: "A sophisticated and well-equipped luxury sedan with advanced tech.",
      available: true
    },
    {
      id: "car7",
      name: "Mercedes-Benz C-Class",
      model: "2021",
      year: 2021,
      price: 55000,
      image: "https://www.carsguide.com.au/car-database/mercedes-benz/c-class/2021/images/mercedes-benz-c-class-2021.jpg",
      description: "A refined and elegant luxury sedan with a premium interior.",
      available: true
    },
    {
      id: "car8",
      name: "Nissan Altima",
      model: "2021",
      year: 2021,
      price: 32000,
      image: "https://www.carsguide.com.au/car-database/nissan/altima/2021/images/nissan-altima-2021.jpg",
      description: "A midsize sedan offering great value, comfort, and efficiency.",
      available: false
    },
    {
      id: "car9",
      name: "Hyundai Sonata",
      model: "2022",
      year: 2022,
      price: 35000,
      image: "https://www.carsguide.com.au/car-database/hyundai/sonata/2022/images/hyundai-sonata-2022.jpg",
      description: "A stylish sedan with an impressive design and features.",
      available: true
    },
    {
      id: "car10",
      name: "Kia Stinger",
      model: "2021",
      year: 2021,
      price: 40000,
      image: "https://www.carsguide.com.au/car-database/kia/stinger/2021/images/kia-stinger-2021.jpg",
      description: "A performance-oriented sports sedan with striking looks.",
      available: true
    }
  ];
  

// Function to insert car records into Firestore
const insertCarRecords = async () => {
  const carsCollection = firestore().collection('cars'); // Firebase Firestore collection

  // Loop through each record and add it to Firestore
  for (const car of carRecords) {
    await carsCollection.doc(car.id).set(car);
  }

  console.log('Car records inserted successfully!');
};

// Run the insert function
insertCarRecords();
