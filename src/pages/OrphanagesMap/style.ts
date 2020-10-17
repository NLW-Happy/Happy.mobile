import { StyleSheet, Dimensions } from 'react-native';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: Constants.borderRadius,
    justifyContent: 'center',
    elevation: 2,
  },

  calloutText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: Constants.borderRadius,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3',
  },

  createOrphanagesButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: Constants.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
