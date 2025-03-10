// import React, { useState } from 'react'
// import {View, Text, Link, StyleSheet} from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
// import {Button} from 'react-bootstrap';
// import { useEffect, FlatList } from 'react';


// const Dashboard = () => {
//   return (
//     <View >
//       <LinearGradient
//         colors={['#004d7a', '#008793', '#00bf72']}
//         style={styles.background}>
//         <Text style={styles.text}>Dashboard user</Text>
    
//     <Button variant="primary" href='/explore'>Primary</Button>
//       {fetchError ? 
//       <Text>{fetchError}</Text>: <Text>Data received: </Text>}

//       </LinearGradient>
//     </View>
    
//   );
// }
// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//     backgroundColor: 'orange',
//   },
//   background: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     height: 900,
//   },
//   button: {
//     padding: 15,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   text: {
//     backgroundColor: 'transparent',
//     fontSize: 25,
//     color: '#fff',
//     marginLeft: 5,
//   },
// });
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const WorkoutsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Weekly Frequency</Text>
      {/* Placeholder for progress bars */}
      <Text>Progress Bars for Workouts</Text>
      {/* List your workouts */}
      <Text>Single Exercises</Text>
      <Text>Sprints & Runs</Text>
      <Text>Training Spots</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});

export default WorkoutsScreen;