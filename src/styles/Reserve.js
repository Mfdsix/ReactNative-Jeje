import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../values/Colors';

const dim = Dimensions.get('window');

export default StyleSheet.create({
  activityImage: {
    width: dim.width - 40,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  activityName: {
    bottom: 20,
    left: 15,
  },
});
