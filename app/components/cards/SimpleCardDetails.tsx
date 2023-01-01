import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppText from "../AppText";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../../customization/Theme";
import ListAvatarItem from "./ListAvatarItem";

interface Props {
  title: string;
  description: string;
  price: string;
  image: ImageSourcePropType;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const SimpleCardDetails: React.FC<Props> = ({ title,description,price,image,style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();
  return (
   
      <View style={[styles.card , style && style]}>
        <Image
          style={[styles.cardImage]}
          source={image}
          resizeMode="cover"
        />
        <View style={styles.cardInfoBox}>
          <AppText style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{title}</AppText>
          <AppText variant="body" style={styles.description} numberOfLines={6} ellipsizeMode='tail'>
           {description}
          </AppText>
          <AppText style={styles.cta}>{price}</AppText>
      </View>
      <ListAvatarItem
        title="Food Burger"
        price="$6.90"
        description="Loremcaecati ipsa officia quibusdam magni. dfv sdf dsd sdfd "
        image={require("../../assets/images/juice.jpeg")}
      />
      <ListAvatarItem
        title="Food Burger"
        price="$6.90"
        description="Loremcaecati ipsa officia quibusdam magni. dfv sdf dsd sdfd "
        image={require("../../assets/images/juice.jpeg")}
      />
      <ListAvatarItem
        title="Food Burger"
        price="$6.90"
        description="Loremcaecati ipsa officia quibusdam magni. dfv sdf dsd sdfd "
        image={require("../../assets/images/juice.jpeg")}
      />
      </View>
  
  );
};

export default SimpleCardDetails;

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: Theme.WHITE,
    overflow: 'hidden',
  },
  cardImage: {
    width: "100%",
    height: 320,
  },
  cardInfoBox: {
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
    paddingVertical: 12,
    // backgroundColor:'green',
  },
  title: {
    fontSize:20, fontWeight:'500',marginBottom:6, letterSpacing:1,lineHeight:22
  },
  description: {marginBottom:8 },
  cta: {fontSize:22,fontWeight:'600', letterSpacing:1.5,},
});
