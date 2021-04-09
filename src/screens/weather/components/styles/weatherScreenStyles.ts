import {StyleSheet} from "react-native";
import {getScreenHeight, getScreenWidth} from "../../../../common/dimensions";

export const bigScreenStyle = StyleSheet.create({
  view: { marginBottom: 10, marginRight: 10, marginLeft: 10 },
  titleText: { textAlign: 'center', fontSize: getScreenWidth * 0.04, fontWeight: 'bold' },
  tableBorder: { borderWidth: 2, borderColor: '#142459' },
  rowHeader: { height: getScreenHeight * 0.2, backgroundColor: '#176BA0' },
  rowHeaderText: { textAlign: 'center', fontSize: getScreenWidth * 0.02, fontWeight: 'bold' },
  rowData: { height: getScreenHeight * 0.8, backgroundColor: 'white' },
  rowDataText: { textAlign: 'center', fontSize: 20, marginBottom: getScreenHeight * 0.3 },
})

export const smallScreenStyle = StyleSheet.create({
  view: { marginBottom: getScreenHeight * 0.1, marginRight: 5, marginLeft: 5 },
  titleText: { textAlign: 'center', fontSize: getScreenHeight * 0.05, fontWeight: 'bold' },
  tableBorder: { borderWidth: 2, borderColor: '#142459' },
  rowHeader: { height: getScreenHeight * 0.2, backgroundColor: '#176BA0' },
  rowHeaderText: { textAlign: 'center', fontSize: getScreenHeight * 0.03, fontWeight: 'bold' },
  rowData: { height: getScreenHeight * 0.8, backgroundColor: 'white'},
  rowDataText: { textAlign: 'center', fontSize: 20, marginBottom: getScreenHeight * 0.3 },
})
