import { StyleSheet } from 'react-native'
import { getScreenHeight, getScreenWidth } from '../../../../common/dimensions'

const styles = StyleSheet.create({
  button: {
    width: getScreenWidth / 2.3,
    height: getScreenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
  },
  githubText: { color: 'white', fontSize: getScreenWidth * 0.04 },
  weatherAppText: { fontSize: getScreenWidth * 0.11 },
  viewOuterContainer: { flex: 1, flexDirection: 'column' },
  viewInnerContainer: { alignItems: 'center', flex: 1, paddingTop: getScreenHeight * 0.3 },
})

export default styles
