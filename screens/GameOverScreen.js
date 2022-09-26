import { View, StyleSheet, Image, Text, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../contants/colors';

const GameOverScreen = ({ rounds, userNumber, onRestart }) => {
   const { width, height } = useWindowDimensions();
   let imageSize = 300;
   if (width < 380) {
      imageSize = 150;
   }
   if (height < 380) {
      imageSize = 80;
   }
   const imageStyle = {
      width: imageSize,
      height: imageSize,
      borderRadius: imageSize / 2
   };
   return (
      <ScrollView style={styles.screen}>
         <View style={styles.container}>
            <Title>GAME OVER!</Title>
            <View style={[styles.imageContainer, imageStyle]}>
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
      </ScrollView>
   );
};

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
   screen: {
      flex: 1
   },
   container: {
      flex: 1,
      padding: 24,
      alignItems: 'center',
      justifyContent: 'center'
   },
   imageContainer: {
      // borderRadius: deviceWidth < 380 ? 75 : 150,
      // width: deviceWidth < 380 ? 150 : 300,
      // height: deviceWidth < 380 ? 150 : 300,
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