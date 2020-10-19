import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
    backgroundColor: '#FF669D',
    alignItems: 'center',
    justifyContent: 'center',
  },

  canceledTitle: {
    fontFamily: Constants.fonts.Nunito_800ExtraBold,
    color: '#FFF',
    fontSize: 34,
    textAlign: 'center',
    marginTop: 18,
  },

  canceledText: {
    marginTop: 18,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: Constants.fonts.Nunito_600SemiBold,
    color: '#FFF',
    textAlign: 'center',
  },

  containerButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  canceledButton: {
    padding: 20,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  canceledButtonText: {
    color: '#FFF',
    fontFamily: Constants.fonts.Nunito_800ExtraBold,
    fontSize: 16,
  },
});

export default styles;
