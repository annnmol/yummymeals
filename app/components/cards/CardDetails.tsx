import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleProp,
  StyleSheet, View
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import { Theme } from "../../utils";
import AppSafeViewScreen from "../AppSafeViewScreen";

import AppText from "../AppText";
import ListAvatarItem from "./ListAvatarItem";

interface Props {
  // title: string;
  // description: string;
  // price: string;
  // image: ImageSourcePropType;
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const CardDetails: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<any>()
  const { title, description, price, image } = params;
  
  console.table("item", params)
  return (
   <AppSafeViewScreen style={{paddingHorizontal:0 }}>
      
    <View style={[styles.card, style && style]}>
        {/* <Image
          style={[styles.cardImage]}
          source={{uri:image || ''}}
          resizeMode="contain"
        /> */}
           <Image
          style={[styles.cardImage]}
          tint={'light'}
          uri={image}
          // preview={preview}
          transitionDuration={300}
        />
        <View style={styles.cardInfoBox}>
          <AppText style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{title}</AppText>
          <AppText variant="body" style={styles.description} numberOfLines={6} ellipsizeMode='tail'>
           {description}
          </AppText>
          <AppText style={styles.cta}> ₹ {price}</AppText>
      </View>
      <ListAvatarItem
        title="Food Burger ipsa officia quibusdam magni. dfv sdf dsd sdfd dscdds sdfd dsrfd dsdfesv "
        price="$6.90"
        description="Loremcaecati ipsa officia quibusdam magni. dfv sdf dsd sdfd dscdds sdfd dsrfd dsdfesv "
        image={require("../../assets/images/juice.jpeg")}
      />
     
      </View>
       </AppSafeViewScreen>
  
  );
};

export default CardDetails;

const styles = StyleSheet.create({
  card: {
    flex:1,
    backgroundColor: Theme.WHITE,
    overflow: 'hidden',
  },
  cardImage: {
    width: "100%",
    height: 320,
    resizeMode:"contain",
  },
  cardInfoBox: {
    paddingHorizontal: Theme.PADDING_HORIZONTAL_SCREEN,
    paddingVertical: 16,
    // backgroundColor:'green',
  },
  title: {
    fontSize:20, fontWeight:'500',marginBottom:6, letterSpacing:1,lineHeight:22
  },
  description: {marginBottom:8 },
  cta: {fontSize:22,fontWeight:'600', letterSpacing:1.5,},
});
