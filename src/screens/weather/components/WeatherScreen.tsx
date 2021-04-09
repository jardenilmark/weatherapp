import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

import { Text, View } from 'react-native'
import { getScreenWidth } from '../../../common/dimensions'
import { Table, Row } from 'react-native-table-component'
import { bigScreenStyle, smallScreenStyle } from './styles/weatherScreenStyles'

const WeatherScreen = props => {
  const { weatherData, isLoading } = props

  const width = getScreenWidth

  /* checks if screen is big based on width */
  const isBigScreen = width > 420

  const date = new Date()
  const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

  const { description, humidity, main, pressure, temperature } = weatherData

  /* data to be passed based on width dimension */
  const tableHead = isBigScreen
    ? ['Date', 'Temperature(F)', 'Description', 'Main', 'Pressure', 'Humidity']
    : ['Date', 'Temperature']
  const tableData = isBigScreen
    ? [formattedDate, temperature, description, main, pressure, humidity]
    : [formattedDate, temperature]

  /* style to use based on width dimension */
  const style = isBigScreen ? bigScreenStyle : smallScreenStyle

  return (
    <View style={style.view}>
      <Spinner visible={isLoading} />
      <Text style={style.titleText}>Weather Data</Text>
      <Table borderStyle={style.tableBorder}>
        <Row data={tableHead} style={style.rowHeader} textStyle={style.rowHeaderText} />
        <Row data={tableData} style={style.rowData} textStyle={style.rowDataText} />
      </Table>
    </View>
  )
}

export default WeatherScreen
