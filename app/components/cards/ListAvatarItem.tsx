import React, { useRef } from "react";
import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { Theme } from "../../utils";

import AppText from "../AppText";

interface Props {
  title: string;
  description?: string;
  image?: ImageSourcePropType;
  onPress?: (event: GestureResponderEvent) => void;
  RenderRightActions?: any;
  IconAvatarComponent?: any;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const ListAvatarItem: React.FC<Props> = ({
  title,
  description,
  image,
  onPress,
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
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderRightActions={RenderRightActions}
        ref={swipeableRef}
        rightThreshold={40}
        // onSwipeableLeftOpen={() => closeSwipeable()}
      >
        <TouchableHighlight underlayColor={Theme.GREY} onPress={onPress}>
          <Animated.View style={[styles.card, style && style]}>
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
        </TouchableHighlight>
      </Swipeable>
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
