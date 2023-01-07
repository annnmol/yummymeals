import { StyleProp, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AppItemSeparator, AppSafeViewScreen } from '../../components';
import { FlashList } from '@shopify/flash-list';
import AppOfferCard from '../../components/cards/AppOfferCard';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_NAMES } from '../../navigations/Routes';
import { CONFIG } from '../../utils';
import axios from 'axios';
import { FakeStoreService } from '../../services/FakeStoreService';
import { AppActivityLoader, AppActivityLoaderProps } from '../../components/hoc/AppActivityIndicator';



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

interface Props extends AppActivityLoaderProps {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const TopItemListings: React.FC<Props> = ({ setLoading,style, children, ...otherProps }) => {

  const navigation = useNavigation<any>();
    const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (item: any) => {
    // Delete the message from messages
    setData(data.filter((m: any) => m.id !== item?.id));
  };

  const getData = () => {
    console.log("api called")
    setLoading(true)
    FakeStoreService.getProducts().then(function (response) {
      // handle success
      console.table("get reponse");
      // console.table("get reponse",response?.data);
      setData(response?.data)
      setLoading(false)

    })
    .catch(function (error) {
      // handle error
      setLoading(false)
      
      console.log("api error",error);
    })
   
  }

  useEffect(() => {
    getData()
  }, [])
  

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
                // image={item?.image}
                // image={{uri:item?.image || ''}}
                image={item?.image}
                preview={require('../../assets/images/user.jpg')}
                onPress={()=>navigation.navigate(ROUTES_NAMES.CARD_DETAILS, item)}
              />
            );
          }}
          ItemSeparatorComponent={() => <AppItemSeparator style={{marginVertical:12}}/>}
          refreshing={refreshing}
        onRefresh={() =>
            console.log('')
            // setData([
            //   {
            //     id: 1,
            //     title: "refresh se aaya hu",
            //     description: "16 bje parso milna",
            //     image: require("../../assets/images/user1.jpg"),
            //   },
            //   ...data,
            // ])
          }
        />
    //  </AppSafeViewScreen>
  );
};

export default AppActivityLoader(TopItemListings);

const styles = StyleSheet.create({
    container: {
    //    paddingHorizontal:0
    },

});