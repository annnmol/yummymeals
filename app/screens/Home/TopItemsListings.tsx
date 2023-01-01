import { StyleProp, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AppItemSeparator, AppSafeViewScreen } from '../../components';
import { FlashList } from '@shopify/flash-list';
import AppOfferCard from '../../components/cards/AppOfferCard';


let initialData: any = [
    {
      id: 1,
      title: "Burger",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 5.09'
    },
    {
      id: 2,
      title: "Maggi",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 7.09'
    },
    {
      id: 3,
      title: "Biryani",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 2.09'
    },
    {
      id: 4,
      title: "Dal Bhatti Churma",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 7.09'
    },
    {
      id: 5,
      title: "Duoble egg roll",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 5.09'
    },
    {
      id: 122,
      title: "Cold Coffee",
      description: "16 bje parso milna",
      image: require("../../assets/images/user1.jpg"),
      price:'$ 11.09'
    },

  ];

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const TopItemListings: React.FC<Props> = ({ style, children, ...otherProps }) => {


    const [data, setData] = useState(initialData);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item: any) => {
    // Delete the message from messages
    setData(data.filter((m: any) => m.id !== item?.id));
  };

    return (
    //  <AppSafeViewScreen style={styles.container}>
            <FlashList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
          data={data}
          estimatedItemSize={50}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({ item, index }) => {
            return (
                <AppOfferCard
                title={item?.title}
                price={item?.price}
                description={item?.description}
                image={item?.image}
              />
            );
          }}
          ItemSeparatorComponent={() => <AppItemSeparator style={{marginVertical:12}}/>}
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
    //  </AppSafeViewScreen>
  );
};

export default TopItemListings;

const styles = StyleSheet.create({
    container: {
    //    paddingHorizontal:0
    },

});