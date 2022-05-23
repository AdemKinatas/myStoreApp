import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eceff1",
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        borderRadius: 10,
        resizeMode: 'contain',
    },
    inner_container: {

    },
    title: {
        fontWeight: '700',
        fontSize: 20,
        color: "#333333",
    },
    price: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 17,
    },
    inStock: {
        color: 'red',
        marginTop: 5,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 17,
    },
});