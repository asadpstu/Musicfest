import { StyleSheet, View } from "react-native";

const Devider = () =>{
    return(
        <View style={styles.devider}>
        </View>
    );
}

const styles = StyleSheet.create({
    devider: {
        margin: 10,
        borderBottomColor:'#dddddd',
        borderWidth: .5
    },
});

export default Devider;