import {
  KeyboardAvoidingView,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { AppSafeViewScreen } from "../../components";
import { useNavigation } from "@react-navigation/native";
import {
  AppForm,
  AppFormField,
  AppFormPasswordField,
  AppFormSelectField,
  AppFormTextAreaField,
  AppSubmitButton,
} from "../../components/forms";
import { addItemSchema } from "../../utils/Validation";
import { Theme } from "../../customization/Theme";
import AppPickerCategoryItem from "../../components/AppPickerCategoryItem";

let Options = [
  {
    id: 1,
    name: "Fashion",
    value: "fashion",
    icon: {
      name: "tshirt-crew",
      backgroundColor: Theme.SUCCESS,
    },
  },
  {
    id: 2,
    name: "Mobiles",
    value: "mobiles",
    icon: {
      name: "cellphone",
      backgroundColor: Theme.PRIMARY,
    },
  },
  {
    id: 3,
    name: "Electronics",
    value: "electronics",
    icon: {
      name: "laptop",
      backgroundColor: Theme.ERROR,
    },
  },
  {
    id: 4,
    name: "Home",
    value: "home",
    icon: {
      name: "home",
      backgroundColor: Theme.SUCCESS,
    },
  },
  {
    id: 5,
    name: "Beauty",
    value: "beauty",
    icon: {
      name: "face-woman",
      backgroundColor: Theme.PRIMARY,
    },
  },
  {
    id: 6,
    name: "Health",
    value: "health",
    icon: {
      name: "doctor",
      backgroundColor: Theme.ERROR,
    },
  },
];

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const Filename: React.FC<Props> = ({ style, children, ...otherProps }) => {
  const navigation = useNavigation<any>();

  const [userInput, setUserInput] = useState<any>({
    title: "",
    price: "",
    category: 0,
    description: "",
  });

  const handleSubmitBtn = (values: any, SubmitProps: any) => {
    console.log("values are", values, SubmitProps);
    SubmitProps.setSubmitting(true);

    setTimeout(() => {
      SubmitProps.setSubmitting(false);

      SubmitProps.resetForm();
    }, 4000);
  };

  return (
    <AppSafeViewScreen style={styles.container}>
      <KeyboardAvoidingView style={styles.formContainer}>
        <AppForm
          initialValues={userInput}
          onSubmit={(values: any, submitProps: any) => {
            handleSubmitBtn(values, submitProps);
          }}
          validationSchema={addItemSchema}
        >
          <AppFormField
            label="Title"
            name="title"
            placeholder="Adidas Shoes"
            keyboardType="phone-pad"
            icon="view-headline"
          />

          <AppFormSelectField
            label="Category"
            name="category"
            placeholder="Select a option"
            icon="apps"
            Options={Options}
            numberOfColumns={3}
            PickerComponent={AppPickerCategoryItem}
          />
          <AppFormField
            label="Price"
            name="price"
            placeholder="$15"
            keyboardType="phone-pad"
            icon="tag-text-outline"
          />
          <AppFormTextAreaField
            label="Description"
            name="description"
            placeholder="summary"
            keyboardType="default"
            icon="sticker-text-outline"
          />
          <AppSubmitButton title={"Add Item"} />
        </AppForm>
      </KeyboardAvoidingView>
    </AppSafeViewScreen>
  );
};

export default Filename;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  formContainer: {
    width: "100%",
  },
});
