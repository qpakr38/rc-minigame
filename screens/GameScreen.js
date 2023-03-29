import { Text, View, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomBetween = (min, max, exclude) => {
  const rnNum = Math.floor(Math.random() * (max - min)) + min;
  if (rnNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return exclude;
  }
};
const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  console.log(initialGuess);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  console.log(currentGuess);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <Text>LOG ROUNDS</Text>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
