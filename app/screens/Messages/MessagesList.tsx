import { FlatList, StyleProp, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ListAvatarItem from "../../components/cards/ListAvatarItem";
import { AppIcon, AppItemSeparator, AppSafeViewScreen } from "../../components";
import { FlashList } from "@shopify/flash-list";
import AppItemSwipeAction from "../../components/AppItemSwipeAction";

let initialData: any = [
  {
    id: 1,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 2,
    title: "Farheen",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 3,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 4,
    title: "Divina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 5,
    title: "Hina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 122,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 21,
    title: "Farheen",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 31,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 41,
    title: "Divina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 15,
    title: "Hina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 54,
    title: "Hina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 1242,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 215,
    title: "Farheen",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 351,
    title: "Anmol",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 451,
    title: "Divina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
  {
    id: 155,
    title: "Hina",
    description: "16 bje parso milna",
    image: require("../../assets/images/user1.jpg"),
  },
];

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const MessageList: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const [data, setData] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item: any) => {
    // Delete the message from messages
    setData(data.filter((m: any) => m.id !== item?.id));
  };

  return (
    <AppSafeViewScreen style={{ paddingHorizontal: 0 }}>
        <FlashList
          data={data}
          estimatedItemSize={50}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ListAvatarItem
                title={item?.title}
                description={item?.description}
                image={item?.image}
                onPress={() => console.log("itemclicked", index)}
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
