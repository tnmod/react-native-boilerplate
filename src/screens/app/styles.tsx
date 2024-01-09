import { StyleSheet } from "react-native";

export const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "700"
  },
  button: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
    padding: 1,
    width: 68
  },
  circleButton: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 50

  }
});
