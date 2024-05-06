import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Fragment } from "react";

export default function QuotationsList() {
  return (
    <Fragment>
      <View style={styles.filters}>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonQuery} onPress={() => {}}>
          <Text style={styles.textButtonQuery}>6M</Text>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}
