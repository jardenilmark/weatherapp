import { StyleSheet } from 'react-native'
import { getScreenHeight, getScreenWidth } from '../../../../common/dimensions'

const styles = StyleSheet.create({
  outermostView: { flex: 1, flexDirection: 'column' },
  githubInfoOuterView: { alignSelf: 'center', alignItems: 'center', flex: 1, paddingTop: getScreenHeight * 0.2 },
  image: { height: getScreenHeight * 0.2, width: getScreenHeight * 0.2, borderRadius: 150 },
  placeholderImage: {
    height: getScreenHeight * 0.2,
    width: getScreenHeight * 0.2,
    borderRadius: 150,
    backgroundColor: 'gray',
  },
  githubName: { textAlign: 'center', fontSize: getScreenWidth * 0.06, fontWeight: 'bold' },
  githubURL: { textAlign: 'center', color: 'blue', textDecorationLine: 'underline', fontSize: getScreenWidth * 0.04 },
  coordinatesView: { alignSelf: 'center', flex: 1 },
  coordinatesText: { textAlign: 'center', fontSize: getScreenWidth * 0.044 },
  buttonView: { width: getScreenWidth * 0.4, alignItems: 'center', alignSelf: 'center', paddingTop: 20 },
})

export default styles
