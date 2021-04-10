import { StyleSheet } from 'react-native'
import { getScreenHeight, getScreenWidth } from '../../../../common/dimensions'

export const portraitStyles = StyleSheet.create({
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

export const landscapeStyles = StyleSheet.create({
  button: {
    width: getScreenHeight / 2.3,
    height: getScreenWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'black',
  },
  githubText: { color: 'white', fontSize: getScreenHeight * 0.04 },
  weatherAppText: { fontSize: getScreenHeight * 0.11 },
  viewOuterContainer: { flex: 1, flexDirection: 'column' },
  viewInnerContainer: { alignItems: 'center', flex: 1, paddingTop: getScreenHeight * 0.1 },
})

