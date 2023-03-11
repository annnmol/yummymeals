import React, { useRef } from "react";
import {
  Dimensions,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  Swipeable,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  SharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Theme } from "../../utils";

import AppText from "../AppText";
import AppItemSwipeAction from "../AppItemSwipeAction";

interface Props {
  item?:any,
  title: string;
  description?: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  onDelete?: (item:any) => void;
  RenderRightActions?: any;
  IconAvatarComponent?: any;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const TRANSLATE_RIGHT_THRESHOLD = -(SCREEN_WIDTH * 0.23);

const ListAvatarItem: React.FC<Props> = ({
  item,
  title,
  description,
  image,
  onPress,
  onDelete,
  RenderRightActions,
  IconAvatarComponent,
  style,
  children,
  ...otherProps
}) => {
  const swipeableRef = useRef<any>(null);

  const closeSwipeable = () => {
    swipeableRef?.current?.close();
  };




  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event, context) => {
      if (event.translationX <= 0) {
        translateX.value = event.translationX;
      }
      // console.log("onAc tive", event.translationX,translateX.value, TRANSLATE_RIGHT_THRESHOLD);
    },
    onEnd: (event, context) => {
      const shouldBeDismissed = translateX.value < TRANSLATE_RIGHT_THRESHOLD;

      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH, undefined, (isFinised) => {
          if (isFinised && onDelete && item) {
            console.log("isFinised", item)
            runOnJS(onDelete)(item);
          }
        });
        // deleteFnWorklet();
        // onDelete && onDelete();
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));
  return (
    <GestureHandlerRootView>
      {/* <Swipeable
     renderRightActions={RenderRightActions}
     ref={swipeableRef}
     rightThreshold={40}
   > */}

      <PanGestureHandler onGestureEvent={panGesture}>
        {/* <TouchableHighlight underlayColor={Theme.GREY} onPress={onPress}> */}
        <Animated.View style={[styles.card, style && style, rStyle]}>
          {IconAvatarComponent && IconAvatarComponent}
          {image && (
            <Image
              style={[styles.cardImage]}
              source={image}
              resizeMode="cover"
            />
          )}
          <View style={styles.cardInfoBox}>
            <AppText
              style={styles.title}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {title}
            </AppText>
            {description && (
              <AppText
                variant="body"
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {description}
              </AppText>
            )}
          </View>
        </Animated.View>
        {/* </TouchableHighlight> */}
      </PanGestureHandler>
      <AppItemSwipeAction
        onPress={() => console.log("delete swipe btn clicked")}
      />

      {/* </Swipeable> */}
    </GestureHandlerRootView>
  );
};

export default ListAvatarItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxHeight: 80,
    overflow: "hidden",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    backgroundColor: Theme.WHITE,
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
    paddingVertical: Theme.PADDING_HORIZONTAL_SCREEN - 4,
    paddingRight: 30,
  },
  cardImage: {
    width: 54,
    height: 54,
    borderRadius: 32,
  },
  cardInfoBox: {
    marginHorizontal: Theme.PADDING_HORIZONTAL_SCREEN - 4,
    justifyContent: "center",
    width: "85%",
    height: "100%",
    overflow: "hidden",
    // backgroundColor: Theme.SUCCESS,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
    letterSpacing: 1,
    overflow: "hidden",
  },
  description: {
    fontSize: 14,
    overflow: "hidden",
    color: Theme.GREY_DARK,
  },
});
