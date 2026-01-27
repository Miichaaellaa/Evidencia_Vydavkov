import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../../constant/styles";

function SearchBar({ placeholder, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    <Ionicons name="search" size={20} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 35,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  icon: {
    marginRight: 8,
    color: GlobalStyles.colors.primary500,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
});

export default SearchBar; 