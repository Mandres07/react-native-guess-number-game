import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../contants/colors';

const NumberContainer = ({ children }) => {
   return (
      <View style={styles.container}>
         <Text style={styles.numberText}>{children}</Text>
      </View>
   );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   container: {
      borderWidth: 4,
      borderColor: Colors.accent500,
      padding: deviceWidth < 380 ? 12 : 24,
      margin: deviceWidth < 380 ? 12 : 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center'
   },
   numberText: {
      color: Colors.accent500,
      fontSize: deviceWidth < 380 ? 28 : 36,
      fontFamily: 'open-sans-bold'
   }
});

export default NumberContainer;