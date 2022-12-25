import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ROUTES_NAMES } from '../../utils/defaults'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';


const HomeScreen = () => {
  const navigation = useNavigation<any>()

  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.NEWSCARD)}
      >
        <Text>NewsCard</Text>
      </TouchableOpacity>

      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[{ width: 100, height: 80, backgroundColor: 'black', margin: 30 }, style]}
      />
      <Button
        title="toggle"
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      />
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})