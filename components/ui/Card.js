import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../contants/colors';

const Card = ({ children }) => {
   return (
      <View style={styles.card}>
         {children}
      </View>
   );
};

const styles = StyleSheet.create({
   card: {
      marginTop: 36,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: Colors.primary800,
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      alignItems: 'center',
      justifyContent: 'center'
   },
});

export default Card;