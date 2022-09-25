import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useState } from 'react';
import Colors from './contants/colors';

export default function App() {
   const [userNumber, setUserNumber] = useState(null);
   const [gameIsOver, setGameIsOver] = useState(true);
   const [rounds, setRounds] = useState(0);

   const [fontsLoaded, error] = useFonts({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
   });

   if (!fontsLoaded) {
      return <AppLoading />;
   }

   function pickedNumberHandler(pickedNumber) {
      setUserNumber(pickedNumber);
      setGameIsOver(false);
   }

   function gameOverHandler(numberOfRounds) {
      setGameIsOver(true);
      setRounds(numberOfRounds);
   }

   function restartGameHandler() {
      setUserNumber(null);
      setRounds(0);
   }

   let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;
   if (userNumber) {
      screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
   }

   if (userNumber && gameIsOver) {
      screen = <GameOverScreen rounds={rounds} userNumber={userNumber} onRestart={restartGameHandler} />
   }

   return (
      <LinearGradient
         style={styles.rootScreen}
         colors={[Colors.primary700, Colors.accent500]} >
         <StatusBar style='light' />
         <ImageBackground
            source={require('./assets/images/background.png')}
            resizeMode='cover'
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}>
            <SafeAreaView style={styles.rootScreen}>
               {screen}
            </SafeAreaView>
         </ImageBackground>
      </LinearGradient>
   );
}

const styles = StyleSheet.create({
   rootScreen: {
      flex: 1
   },
   backgroundImage: {
      opacity: 0.15
   }
});
