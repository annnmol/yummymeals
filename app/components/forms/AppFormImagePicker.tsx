import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from 'expo-permissions';


import AppIcon from "../AppIcon";
import AppText from "../AppText";
import AppErrorMessage from "./AppErrorMessage";
import AppButton from "../AppButton";
import { FlashList } from "@shopify/flash-list";
import { AppActivityLoader, AppActivityLoaderProps } from "../hoc/AppActivityIndicator";
import { Theme } from "../../utils";

interface Props extends AppActivityLoaderProps {
  label?: string;
  name: string;
  icon?: string;
  divStyle?: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  sendValuesToParent?: (values: any) => void | undefined;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppFormImagePicker: React.FC<Props> = ({
  label,
  name,
  divStyle,
  icon,
  sendValuesToParent,
  keyboardType = "default",
  children,
  setLoading,
  ...otherProps
}) => {
  const { setFieldTouched, errors, touched, setFieldValue,setFieldError, values } =
    useFormikContext<any>();

  useEffect(() => {
    if (sendValuesToParent) {
      sendValuesToParent(values);
    }
  }, [values]);


  const RequestPermissionFn = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result?.granted) {
      alert("you need to enable the camera permission to use this function");
    }
  };
  
  const handleImagePicker = async () => {
    
    if (values[name]?.length >= 3) {
      setFieldError(name, 'Only 3 images are allowed')
      return;
    }

    
    setLoading(true);
    ImagePicker.launchImageLibraryAsync()
      .then((result: any) => {
        if (!result?.canceled) {
          setFieldValue(name, [...values[name], result.assets[0]])
          setLoading(false);
        } else {
          setLoading(false);
          return;
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log("error while picking image", err);
      });

    return;
  };

  useEffect(() => {
    RequestPermissionFn();
  }, []);

  const handleImageDelete = (index: number, item:ImagePicker.ImagePickerAsset) => {
    Alert.alert(
      "Delete Image",
      "Are you are you want to delete this image? ",
      [
        {
          text: "Cancel",
          onPress: () => { return; },
          style: "cancel"
        },
        {
          text: "Delete", onPress: () => {
            let newArray=  values[name]?.filter((m: ImagePicker.ImagePickerAsset) => m?.assetId !== item?.assetId)
            setFieldValue(name, newArray)
          }
        }
      ]
    );
    
  };


  return (
    <View style={styles.styledView}>
      <AppText variant="label">{label}</AppText>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            handleImagePicker();
            console.log("tapped");
          }}
        >
          <AppIcon
            variant="avatar"
            name={"camera"}
            color={Theme.WHITE}
            size={32}
            backgroundColor={Theme.PLACEHOLDER}
            divStyle={{ width: 60, height: 60 }}
          />
        </TouchableOpacity>
        <View style={styles.imagesContainer}>
          <FlashList
            data={values[name] || []}
            estimatedItemSize={50}
            numColumns={3}
            keyExtractor={(item: any, index: number) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    handleImageDelete(index, item);
                  }}
                >
                  <Image
                    style={[styles.cardImage]}
                    source={{ uri: item?.uri }}
                    resizeMode="cover"
                    // onPress={() => console.log("itemclicked", index)}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
        

        {/* <Image
        style={[styles.cardImage]}
        source={{ uri: files[0]?.uri}}
        resizeMode="cover"
      /> */}
      </View>
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppActivityLoader(AppFormImagePicker);

const styles = StyleSheet.create({
  styledView: {
    position: "relative",
    paddingHorizontal: 8,
    marginBottom: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom:2,
    marginTop:1,
  },

  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginBottom: 8,
  },

  imagesContainer: {
    width: "76%",
    flexDirection: "row",
    marginHorizontal: 20,
    overflow: "hidden",
  },
  
});
