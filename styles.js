import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  total: {
    fontSize: 100,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 15,
  },
  inputRow: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  inputs: {
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
  },
  inputBox: {
    borderWidth: 1,
    backgroundColor: '#f00',
  },
  inputButton: {
    flex: 0.2,
  },
});
