import { StyleSheet } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 34,
    backgroundColor: '#39CC83',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmationTitle: {
    fontFamily: Constants.fonts.Nunito_800ExtraBold,
    color: '#FFF',
    fontSize: 40,
    alignSelf: 'center',
    marginTop: 18,
  },

  confirmationText: {
    marginTop: 18,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: Constants.fonts.Nunito_600SemiBold,
    color: '#FFF',
    textAlign: 'center',
  },

  confirmationButton: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#19C06D',
  },

  confirmationButtonText: {
    color: '#FFF',
    fontFamily: Constants.fonts.Nunito_800ExtraBold,
    fontSize: 16,
  },
});

export default styles;
