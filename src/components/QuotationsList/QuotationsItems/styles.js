import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContent: {
    width: "95%",
    height: "auto",
    backgroundColor: "#ffffff",
    marginLeft: "3%",
    marginBottom: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  contextLeft: {
    width: "36%",
    alignItems: "flex-start",
  },
  boxLogo: {
    flexDirection: "row",
    alignItems: "center",
  },
  logBitcoin: {
    width: 40,
    height: 40,
    marginLeft: 2,
  },
  dayCotation: {
    fontSize: 16,
    paddingLeft: 2,
    color: "#000",
    fontWeight: "bold",
  },
  contextRight: {
    width: "60%",
    alignItems: "flex-end",
  },
  price: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;
