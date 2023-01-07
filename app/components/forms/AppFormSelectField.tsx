import { FlashList } from "@shopify/flash-list";
import { useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import {
  Button,
  KeyboardTypeOptions,
  Modal,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Theme } from "../../utils";

import AppIcon from "../AppIcon";
import AppItemSeparator from "../AppItemSeparator";
import AppPickerListItem from "../AppPickerListItem";
import AppSafeViewScreen from "../AppSafeViewScreen";
import AppText from "../AppText";
import AppErrorMessage from "./AppErrorMessage";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  icon?: string;
  divStyle?: any;
  Options: any;
  PickerComponent?: any;
  numberOfColumns?: number;
  keyboardType?: KeyboardTypeOptions | undefined;
  sendValuesToParent?: (values: any) => void | undefined;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppFormSelectField: React.FC<Props> = ({
  label,
  name,
  placeholder = "Select a option",
  divStyle,
  icon = "lock",
  Options,
  PickerComponent = AppPickerListItem,
  numberOfColumns = 1,
  sendValuesToParent,
  keyboardType = "default",
  children,
  ...otherProps
}) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext<any>();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (sendValuesToParent) {
      sendValuesToParent(values);
    }
  }, [values]);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => { setIsMenuOpen(!isMenuOpen)}}>
        <View style={styles.styledView}>
          <AppText variant="label">{label}</AppText>
          <View
            style={[
              styles.inputContainer,
              {
                borderColor:
                  !errors[name] && values[name]
                    ? Theme.SUCCESS
                    : errors[name] && touched[name]
                    ? Theme.ERROR
                    : Theme.BORDER_COLOR,
              },
            ]}
          >
            {icon && (
              <AppIcon
                name={icon}
                style={styles.icon}
                size={20}
                color={
                  !errors[name] && values[name]
                    ? Theme.SUCCESS
                    : Theme.GREY_DARK
                }
              />
            )}
            <AppText
              style={{
                flex: 1,
                color: values[name] ? Theme.TEXT : Theme.PLACEHOLDER,
                fontSize: 15,
              }}
            >
              {" "}
              {values[name] ? values[name]?.name : placeholder}
            </AppText>

            <View style={styles.endIcon}>
            {!values[name] ? (
                <AppIcon
                  name={isMenuOpen ? "chevron-up" : "chevron-down"}
                  size={16}
                  color={Theme.PLACEHOLDER}
                />
              ) : <Pressable onPress={()=>setFieldValue(name, 0)}>
                  
              <AppIcon
              name={'close'}
              size={16}
              color={Theme.PLACEHOLDER}
              />
              </Pressable> 
              }
              </View>
          </View>

          <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={isMenuOpen} animationType="slide">
        <AppSafeViewScreen >
          <FlashList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={Options}
            estimatedItemSize={10}
            numColumns={numberOfColumns}
            keyExtractor={(item: any, index: number) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <PickerComponent
                  title={item?.name}
                  icon={item?.icon?.name}
                  iconBackgroundColor={item?.icon?.backgroundColor}
                  onPress={() => {
                    setFieldValue(name, item);
                    setIsMenuOpen(false);
                  }}
                  style={{ marginBottom: 8 }}
                />
              );
            }}
            ItemSeparatorComponent={() => (
              <AppItemSeparator style={{ marginVertical: 2 }} />
            )}
            // ListHeaderComponent={
            //   <AppPickerListItem
            //     title={placeholder}
            //     onPress={() => {
            //       setFieldValue(name, 0);
            //       setIsMenuOpen(false);
            //     }}
            //   />
            // }
            // ListHeaderComponentStyle={{ marginVertical: 8 }}
          />
          {/* <AppButton variant="text" onPress={() => {
              setIsMenuOpen(false);
            }}>Close</AppButton> */}
          <Button
            title="close"
            onPress={() => {
              setIsMenuOpen(false);
              // setFieldTouched(name, true)
            }}
          />
        </AppSafeViewScreen>
      </Modal>
    </>
  );
};

export default AppFormSelectField;

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
    alignItems: "center",

    width: "100%",
    height: 48,
    backgroundColor: Theme.SECONDARY,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 6,
    marginBottom: 4,
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    left: 10,
  },
  endIcon: {
    position: "absolute",
    zIndex: 1,
    right: 8,
  },
});
