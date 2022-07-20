import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardView: {
    width: width / 2.8,
    height: 200,
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: width / 39,
    marginTop: width / 39,
    marginHorizontal: 5,
  },
  safeArea: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bigImage: {
    width: width / 2.8,
    height: height / 8,
    borderTopRightRadius: width / 39,
  },
  opacity: {opacity: 0.6},
  descView: {
    top: 10,
    left: width / 78,
    flexDirection: 'column',
    height: 60,
    justifyContent: 'space-between',
  },
  descTitle: {fontSize: 15, fontWeight: '500'},
  priceText: {
    fontSize: 15,
    color: '#5C81DA',
    fontWeight: '500',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  mainView: {marginTop: 10, marginBottom: 10},
  cat: {fontSize: 16, fontWeight: '600'},
});

export default styles;
