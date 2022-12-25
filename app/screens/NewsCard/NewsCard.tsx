import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Featured from '../Featured/Featured'
import { Theme } from '../../customization/Theme'

const NewsCard = () => {
  return (
    <ScrollView style={styles.screenWrap} horizontal showsHorizontalScrollIndicator={false}>
  <View style={styles.titleBox}>
        <Text style={styles.title}>Featured</Text>
      </View>

   <Featured/>
   <Featured/>
   <Featured/>
   <Featured/>
   <Featured/>
   <Featured/>
    </ScrollView>
  )
}

export default NewsCard

const styles = StyleSheet.create({
  screenWrap: {
    height:400,
    backgroundColor: Theme.SUCCESS,
  },

  titleBox: {
    backgroundColor: Theme.ERROR,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 1,
  },
})