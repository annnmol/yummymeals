import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AppIcon, AppItemSeparator, AppSafeViewScreen } from "../../components";
import ListAvatarItem from "../../components/cards/ListAvatarItem";

import { useNavigation } from "@react-navigation/native";
import { ROUTES_NAMES } from "../../navigations/Routes";
import useAuthService from "../../services/authServices/useAuthService";
import { Theme } from "../../utils";

interface Props {
  children?: React.ReactNode;
  [otherProps: string]: any;
}

let data = [
  {
    id: 1,
    title: "Order history",
    description: "16 bje parso milna",
    icon: {
      name: 'history',
      backgroundColor:Theme.PRIMARY
    },
    url:ROUTES_NAMES.SEARCH
  },
  {
    id: 2,
    title: "Messages",
    description: "16 bje parso milna",
    icon: {
      name: 'chat',
      backgroundColor:Theme.SUCCESS
    },
    url: ROUTES_NAMES.MESSAGE
  },
]

const AccountScreen: React.FC<Props> = ({ children, ...otherProps }) => {
  const {logOut,user} = useAuthService();
  const navigation = useNavigation<any>();

  const handleNavigation = (url:string) => {
    navigation.navigate(url)
  }

  return (
    <AppSafeViewScreen style={styles.container}>
      <View style={[styles.headerContainer]}>
      <ListAvatarItem
        title={user?.displayName || 'Kuch Bhi'}
        description={user?.email || ''}
          image={require("../../assets/images/user1.jpg")}
          // onPress={()=>handleNavigation(ROUTES_NAMES.SETTINGS)}
      />
      </View>
      <View style={[styles.optionContainer]}>
      <FlashList
          data={data}
          estimatedItemSize={4}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListAvatarItem
                title={item?.title}
                onPress={() => handleNavigation(item?.url)}
                IconAvatarComponent={
                  <AppIcon
                    variant="avatar"
                    name={item?.icon?.name}
                    color={Theme.WHITE}
                    size={24}
                    backgroundColor={item?.icon?.backgroundColor}
                  />
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <AppItemSeparator style={{marginVertical:2}}/>}
        />
      </View>
      <ListAvatarItem
        title={"Logout"}
        // onPress={() => handleNavigation(ROUTES_NAMES.WELCOME)}
        onPress={() => logOut()}
        IconAvatarComponent={
          <AppIcon
            variant="avatar"
            name={'logout'}
            color={Theme.WHITE}
            size={24}
            backgroundColor={Theme.ERROR}
          />
        }
      />
    </AppSafeViewScreen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  headerContainer: {
    marginBottom: 40,
  },
  optionContainer: {
    minHeight: '20%',
  }
});
