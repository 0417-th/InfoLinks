import { View, Text, StyleSheet } from "react-native";
import { blue, red } from "react-native-reanimated/lib/typescript/Colors";

export default function index () {
return (
<View  style={styles.container}>
    <Text style= {styles.title} >eu sou o pior</Text>

    <Text style= {styles.title2}>Pobre so atrai problemas</Text>
    <Text style= {styles.title3}>Eu sou Burro</Text>
</View>
);


}

const styles = StyleSheet.create({

container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
},





    title: {
        color: "red",
        fontSize: 22,
    },

    title2: {
        color: "red",
        fontSize: 26,
    },

    title3: {
        color: "red",
        fontSize:30
    }

})