import { FlatList, StyleProp, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListAvatarItem from "../../components/cards/ListAvatarItem";
import { AppIcon, AppItemSeparator, AppSafeViewScreen } from "../../components";
import { FlashList, ViewToken } from "@shopify/flash-list";
import AppItemSwipeAction from "../../components/AppItemSwipeAction";
import { useSharedValue } from "react-native-reanimated";
import { initialMessageData } from "../../assets/dummyData/dummyData";



interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const MessageList: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const [data, setData] = useState(initialMessageData);
  const [refreshing, setRefreshing] = useState(false);

  // const viewableItems = useSharedValue<ViewToken[]>([])

  const handleDelete = (item: any) => {
    // 'worklet';
    // Delete the message from messages
    console.log("Delete")
    setData(data.filter((m: any) => m.id !== item?.id));
  };

  return (
    <AppSafeViewScreen style={{ paddingHorizontal: 0 }}>
      <FlashList
        data={data}
        estimatedItemSize={50}
        keyExtractor={(item: any, index: number) => index.toString()}
        // onViewableItemsChanged={(props) => {
        //   console.log("props", props)
        //   viewableItems.value=props.viewableItems
        // }}
        renderItem={({ item, index }) => {
          return (
            <ListAvatarItem
              item={item}
              title={item?.title}
              description={item?.description}
              image={item?.image}
              onPress={() => console.log("itemclicked", index)}
              onDelete={handleDelete}
              RenderRightActions={() => (
                <AppItemSwipeAction onPress={() => handleDelete(item)} />
              )}
              // IconAvatarComponent={
              //   <AppIcon
              //     variant="avatar"
              //     name={"home"}
              //     color="red"
              //     size={32}
              //   />
              // }
            />
          );
        }}
        ItemSeparatorComponent={() => <AppItemSeparator />}
        refreshing={refreshing}
        onRefresh={() =>
          setData([
            {
              id: 1,
              title: "refresh se aaya hu",
              description: "16 bje parso milna",
              image: require("../../assets/images/user1.jpg"),
            },
            ...data,
          ])
        }
      />
    </AppSafeViewScreen>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
