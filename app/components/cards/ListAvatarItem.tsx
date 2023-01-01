import React from "react";
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
import { Theme } from "../../customization/Theme";
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
  return (
    <Swipeable renderRightActions={RenderRightActions}>
      <TouchableHighlight underlayColor={Theme.GREY} onPress={onPress}>
        <View style={[styles.card, style && style]}>
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
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListAvatarItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    maxHeight: 80,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    backgroundColor: Theme.WHITE,
    overflow: "hidden",
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
    paddingVertical: Theme.PADDING_HORIZONTAL_SCREEN - 8,
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  cardInfoBox: {
    marginHorizontal: Theme.PADDING_HORIZONTAL_SCREEN - 4,
    paddingVertical: 8,
    justifyContent: "center",
    height: "100%",
    overflow: "hidden",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 6,
    letterSpacing: 1,
    overflow: "hidden",
    width: "100%",
  },
  description: {
    fontSize: 14,
    overflow: "hidden",
    width: "100%",
    color: Theme.GREY_DARK,
  },
});
