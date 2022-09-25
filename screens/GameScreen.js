import { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../contants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
   const rndNum = Math.floor(Math.random() * (max - min)) + min;
   if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
   }
   return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
   const initialGuess = generateRandomBetween(1, 100, userNumber);
   const [currentGuess, setCurrentGuess] = useState(initialGuess);
   const [rounds, setRounds] = useState([]);

   useEffect(() => {
      if (currentGuess === userNumber) {
         onGameOver(rounds.length);
      }
   }, [currentGuess, userNumber, onGameOver]);

   useEffect(() => {
      minBoundary = 1;
      maxBoundary = 100;
   }, []);

   function nextGuessHandler(direction) {
      if (
         (direction === 'lower' && currentGuess < userNumber) ||
         (direction === 'higher' && currentGuess > userNumber)) {
         return Alert.alert('Don\'t lie!', 'You know that this is wrong...', [
            { text: 'Sorry!', style: 'cancel' },
         ]);
      }
      if (direction === 'lower') {
         maxBoundary = currentGuess;
      } else {
         minBoundary = currentGuess + 1;
      }
      const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
      setCurrentGuess(newRndNumber);
      setRounds((prevRounds) => {
         return [newRndNumber, ...prevRounds];
      });
   }

   const guessRoundsLength = rounds.length;

   return (
      <View style={styles.screen}>
         <Title>Opponent's Guess</Title>
         <NumberContainer>{currentGuess}</NumberContainer>
         <View>
            <Card>
               <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
               <View style={styles.buttonsContainer}>
                  <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="md-remove" size={24} color={Colors.white} />
                     </PrimaryButton>
                  </View>
                  <View style={styles.buttonContainer}>
                     <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                        <Ionicons name="md-add" size={24} color={Colors.white} />
                     </PrimaryButton>
                  </View>
               </View>
            </Card>
         </View>
         <View style={styles.listContainer}>
            <FlatList
               data={rounds}
               renderItem={itemData => <GuessLogItem
                  roundNumber={guessRoundsLength - itemData.index}
                  guess={itemData.item}
               />}
               keyExtractor={item => item}
            />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   screen: {
      flex: 1,
      padding: 24
   },
   buttonsContainer: {
      flexDirection: 'row'
   },
   buttonContainer: {
      flex: 1
   },
   instructionText: {
      marginBottom: 15
   },
   listContainer: {
      flex: 1,
      padding: 16
   }
});

export default GameScreen;