import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Theme } from "../../customization/Theme";

const Featured = () => {
  return (
    <View style={styles.screenWrap}>
    
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }}
      />
      <View style={styles.contentBox}>
        <Text style={styles.cardTitle} numberOfLines={2} ellipsizeMode="tail">
          Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eveniet, dolor! In consequatur iste, laudantium laborum neque ad
          eveniet beatae consequuntur quidem voluptate doloremque rerum dolor ea
          culpa placeat impedit sed eaque id? Sed quo quia beatae dolorem nihil
          nemo magni. dolor sit amet consectetur adipisicing elit. Minus, quas!
        </Text>
        <Text style={styles.cardCaption} numberOfLines={3} ellipsizeMode="tail">
          Lorem ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Eveniet, dolor! In consequatur iste, laudantium laborum neque ad
          eveniet beatae consequuntur quidem voluptate doloremque rerum dolor ea
          culpa placeat impedit sed eaque id? Sed quo quia beatae dolorem nihil
          nemo magni. dolor sit amet consectetur adipisicing elit. Minus, quas!
              </Text>
              <View style={styles.cardInfo}>

      </View>
      </View>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  screenWrap: {
    // flex: 1,
    backgroundColor: Theme.ERROR,
        paddingHorizontal: 12,
    height:350,
    // paddingVertical: 8,
  },

  titleBox: {
    backgroundColor: Theme.ERROR,
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "500",
    letterSpacing: 1,
  },
  image: {
    width: 300,
    height: 140,
    resizeMode: "cover",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6,
  },

  contentBox: {
    backgroundColor: Theme.PRIMARY,
    width: 300,
    height: 110,
    flexDirection: "column",
    justifyContent: "space-between",

    padding: 8,
    borderBottomEndRadius: 6,
    borderBottomLeftRadius: 6,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "400",
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  cardCaption: {
    fontSize: 14,
    fontWeight: "400",
  },
  cardInfo: {
      width: '100%',
      backgroundColor:'red',
  },
});
