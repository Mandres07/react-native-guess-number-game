import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props) => {
   const [enteredNumber, setEnteredNumber] = useState('');

   function numberInputHandler(enteredText) {
      setEnteredNumber(enteredText);
   }

   function resetInputHandler() {
      setEnteredNumber('');
   }

   function confirmInputHandler() {
      const chosenNumber = parseInt(enteredNumber);
      if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
         return Alert.alert(
            'Invalid Number',
            'Number has to be a number between 1 and 99',
            [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
         );
      }
      console.log('Valid Number')
   }

   return (
      <View style={styles.inputContainer}>
         <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType='number-pad'
            autoCapitalize='none'
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={numberInputHandler}
         />
         <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
               <PrimaryButton onPress={resetInputHandler}>
                  Reset
               </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
               <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
               </PrimaryButton>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   inputContainer: {
      marginTop: 100,
      marginHorizontal: 24,
      padding: 16,
      backgroundColor: '#3b021f',
      borderRadius: 8,
      elevation: 4,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      alignItems: 'center',
      justifyContent: 'center'
   },
   numberInput: {
      height: 50,
      width: 50,
      fontSize: 32,
      borderBottomColor: '#ddb52f',
      borderBottomWidth: 2,
      color: '#ddb52f',
      marginVertical: 8,
      fontWeight: 'bold',
      textAlign: 'center'
   },
   buttonsContainer: {
      flexDirection: 'row'
   },
   buttonContainer: {
      flex: 1
   }
});

export default StartGameScreen;