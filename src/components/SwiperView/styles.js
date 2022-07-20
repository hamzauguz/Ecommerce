import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: height / 4.22,
    alignSelf: 'center',
    borderRadius: width / 78,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: height / 1.688,
  },
  dotStyle: {
    backgroundColor: 'gray',
    width: width / 8.666666,
    height: width / 78,
    borderRadius: 4,
    marginBottom: -width / 13,
    opacity: 0.4,
  },
  activeDot: {
    width: width / 8.66666,
    height: height / 168.8,
    borderRadius: 4,
    marginBottom: -width / 13,
  },
  swiperStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: width / 9.75,
    backgroundColor: 'hsl(0,0%,94.5%)',
  },
});

export default styles;
