import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../values/Colors';

const dim = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  image: {
    width: dim.width,
    height: 350,
    resizeMode: 'cover',
  },
  backBtn: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  divider: {
    width: dim.width,
    height: 70,
    resizeMode: 'cover',
    marginTop: 40,
  },
  bdActive: {
    borderColor: Colors.GREEN,
  },
});
