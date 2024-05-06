import { Text, View } from "react-native";
import styles from "./styles";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.CurrentPrice}>$ 54423.365</Text>
      <Text style={styles.textPrice}>ultima cotação</Text>
    </View>
  );
}
