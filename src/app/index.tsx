import { View, Text, StyleSheet } from "react-native";


export default function Index () {
    return  (
     <View>
        <Text style={styles.title} >Eu sou o Pior!</Text>
     </View>
    )

}

const styles = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 22,
    }
})