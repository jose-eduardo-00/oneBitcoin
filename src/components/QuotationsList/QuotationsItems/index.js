import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../../img/bitcoinred.png")}
          />
          <Text style={styles.dayCotation}>06/05/2024</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>$ 53331.052</Text>
      </View>
    </View>
  );
}
