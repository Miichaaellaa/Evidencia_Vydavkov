import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GlobalStyles } from "../../constant/styles";

function SearchBar({ placeholder, value, onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.iconContainer}>
        <Ionicons name="search" size={20} style={styles.icon} />
      </View>
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
    backgroundColor: GlobalStyles.colors.primary500,
    borderBottomRightRadius: 70,
    borderTopRightRadius: 60,
  },

  inputContainer: {
    width: "97%",
    backgroundColor: GlobalStyles.colors.primary50,
    marginLeft: -10,
    borderRadius: 6,
    paddingHorizontal: 10,
    borderBottomRightRadius: 60,
  },

  icon: {
    color: GlobalStyles.colors.primary50,
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
    height: 40,
    width: 40,
    marginLeft: -10,
    borderRadius: 90,
    marginBottom: 5,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: GlobalStyles.colors.primary400,

  },
});

export default SearchBar; 