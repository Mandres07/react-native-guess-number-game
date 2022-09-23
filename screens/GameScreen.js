import { View, Text, StyleSheet } from 'react-native';

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={{ textAlign: 'center' }}>New Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default GameScreen;