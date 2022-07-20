import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  categoryImage: {
    height: height / 10.55,
    width: width / 4.875,
    borderRadius: width / 9.75,
  },
  cartStyle: {
    flexDirection: 'column',
    height: height / 6.752,
    width: width / 3.54545,
    marginRight: width / 39,
    marginLeft: width / 39,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: width / 78,
    marginTop: width / 78,
  },
  text: {
    fontSize: width / 24.375,
    fontWeight: '500',
    color: 'gray',
    opacity: 0.8,
    top: width / 78,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: width / 39,
    marginTop: width / 26,
    margin: width / 78,
  },
  scrollStyle: {height: height / 7.672727, flexGrow: 0},
  cat: {fontSize: 16, fontWeight: '600'},
  safeView: {
    flexDirection: 'row',
    width: width / 0.975,
    flexWrap: 'wrap',
    marginTop: width / 39,
  },
});

export default styles;
