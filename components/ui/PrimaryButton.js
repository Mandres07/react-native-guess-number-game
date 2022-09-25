import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../contants/colors';

const PrimaryButton = ({ children, onPress }) => {
   return (
      <View style={styles.buttonOuterContainer}>
         <Pressable
            style={({ pressed }) =>
               pressed
                  ? [styles.buttonInnerContainer, styles.buttonPressed]
                  : styles.buttonInnerContainer
            }
            onPress={onPress}
            android_ripple={{ color: Colors.primary600 }}>
            <Text style={styles.buttonText}>{children}</Text>
         </Pressable>
      </View>
   );
};

const styles = StyleSheet.create({
   buttonOuterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: 'hidden'
   },
   buttonInnerContainer: {
      backgroundColor: Colors.primary500,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2
   },
   buttonPressed: {
      opacity: 0.75
   },
   buttonText: {
      color: '#ffffff',
      textAlign: 'center'
   }
});

export default PrimaryButton;