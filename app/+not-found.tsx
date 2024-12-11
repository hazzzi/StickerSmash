import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found'}} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go Back to Home screen!
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  }
})