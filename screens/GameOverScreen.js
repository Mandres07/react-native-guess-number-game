import { View, StyleSheet, Image, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../contants/colors';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
   return (
      <View style={styles.container}>
         <Title>GAME OVER!</Title>
         <View style={styles.imageContainer}>
            <Image
               source={require('../assets/images/success.png')}
               style={styles.image}
            />
         </View>
         <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highlight}>{rounds}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
         </Text>
         <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center'
   },
   imageContainer: {
      borderRadius: 200,
      width: 300,
      height: 300,
      overflow: 'hidden',
      borderWidth: 3,
      borderColor: Colors.primary800,
      margin: 36
   },
   image: {
      width: '100%',
      height: '100%'
   },
   summaryText: {
      fontFamily: 'open-sans',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 24
   },
   highlight: {
      fontFamily: 'open-sans-bold',
      color: Colors.primary500
   }
});

export default GameOverScreen;