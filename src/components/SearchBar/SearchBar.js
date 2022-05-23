import React from 'react'
import { View, TextInput } from "react-native"
import styles from "./SearchBar.style"

const SearchBar = () => {
    return (
        <View style={styles.searchArea}>
            <View style={styles.search_input_container}><TextInput placeholder="Ara..." placeholderTextColor={"#BBBBBB"} style={styles.search_input} /></View>
        </View>
    )
}

export default SearchBar;