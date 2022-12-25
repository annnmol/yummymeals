import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AppForm, AppFormField, AppSubmitButton } from "../../components/forms";
import AppText from "../../components/AppText";

import { Theme } from "../../customization/Theme";
import { ROUTES_NAMES } from "../../utils/defaults";
import { loginSchema } from "../../utils/Validation";
import AppButton from "../../components/AppButton";

const Login = () => {
  const navigation = useNavigation<any>();

  const [userInput, setUserInput] = useState<any>({
    email: "",
    password: "",
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
    <View style={styles.container}>
      <AppText>Normal</AppText>
      <AppText variant="label">Label</AppText>
      <AppText variant="label" >Label</AppText>
      <AppText variant="label" >Label</AppText>
      <AppButton onPress={()=>console.log("opacity")}>opacity</AppButton>
      <AppButton variant="TouchableHighlight" onPress={()=>console.log("highlight")}>highlight</AppButton>
      <AppForm
        initialValues={userInput}
        onSubmit={(values: any, submitProps: any) => {
          handleSubmitBtn(values, submitProps);
        }}
        validationSchema={loginSchema}
      >
        <AppFormField
          label="Email"
          name="email"
          placeholder="example@domain.com"
          keyboardType="email-address"
        />
       
        <AppFormField
          label="Password"
          name="password"
          placeholder="1234566"
          keyboardType="default"
        />
        <AppSubmitButton title={"Register"} />
      </AppForm>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.SIGNUP)}
      >
        <Text>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.FORGET_PASSORD, {userId:12})}
      >
        <Text>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.TABS_NAVIGATOR)}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES_NAMES.DRAWER_NAVIGATOR)}
      >
        <Text>Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.WHITE_LIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});
