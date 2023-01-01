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

interface Props {
  title: string;
  description: string;
  price: string;
  image: ImageSourcePropType;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppOfferCard: React.FC<Props> = ({ title,description,price,image,style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        // navigation.navigate(ROUTES_NAMES.WELCOME);
        console.log("card tapped");
      }}
    >
      <View style={[styles.card , style && style]}>
        <Image
          style={[styles.cardImage]}
          source={image}
          resizeMode="cover"
        />
        <View style={styles.cardInfoBox}>
          <AppText style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</AppText>
          <AppText variant="body" style={styles.description} numberOfLines={2} ellipsizeMode='tail'>
           {description}
          </AppText>
          <AppText style={styles.cta}>{price}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AppOfferCard;

const styles = StyleSheet.create({
  card: {
   
    backgroundColor: Theme.WHITE,
    overflow: 'hidden',
    borderRadius: Theme.BORDER_RADIUS,
    
    //android
    elevation:1,
    //ios
    // shadowColor: Theme.GREY_DARK,
    // shadowOffset: { width: 2, height: 8 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // minWidth:'100%'
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardInfoBox: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor:Theme.WHITE,
  },
  title: {
    fontSize:18,marginBottom:0
  },
  description: {marginBottom:4},
  cta: {fontSize:21,fontWeight:'500'},
});
