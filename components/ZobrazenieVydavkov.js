import { useContext } from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

import SumaVydavkov from "./SumaVydavkov";
import ZoznamVydavkov from "./ZoznamVydavkov";
import SearchBar from "./UI/SearchBar"; 

import { GlobalStyles } from "../constant/styles";
import { VydavkyContext } from "../store/vydavky-context";

export default function ZobrazenieVydavkov({ vydavky, pocetDniVydavkov }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredVydavky = vydavky.filter((vydavok) => {
    return (
      vydavok.nazov?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vydavok.kategoria?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vydavok.popis?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Zadajte text"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <SumaVydavkov vydavky={filteredVydavky} pocetDni={pocetDniVydavkov} />
      <ZoznamVydavkov vydavky={filteredVydavky} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});