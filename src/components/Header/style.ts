import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: Constants.fonts.Nunito_600SemiBold,
    color: '#8fa7b3',
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default styles;
