import { useNavigation } from "@react-navigation/native";
import { UserCredential } from "firebase/auth";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { AppSafeViewScreen } from "../../components";
import {
  AppForm,
  AppFormField,
  AppFormPasswordField,
  AppFormSelectField, AppSubmitButton
} from "../../components/forms";
import useAuthService from "../../services/authServices/useAuthService";
import { loginSchema } from "../../utils/ValidationSchema";




const Login = () => {
  const {logOut,logIn, register} = useAuthService();
  const navigation = useNavigation<any>();

  const [userInput, setUserInput] = useState<any>({
    email: "",
    password: "",
  });

  const handleSubmitBtn = async (values: any, SubmitProps: any) => {
    // console.log("values are", values, SubmitProps);
    SubmitProps.setSubmitting(true);

    await logIn(values?.email, values?.password).then((response:UserCredential) => {
      // console.log("response", response)
    }).catch((error: any) => {
      console.log("error", error?.message)
    }).finally(() => {
      SubmitProps.setSubmitting(false);
    })

  };

  return (
    <AppSafeViewScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={[styles.logoImage]}
          source={require("../../assets/images/logo.png")}
        />
      </View>
      <KeyboardAvoidingView style={styles.formContainer}>
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
            icon="email"
          />
          <AppFormPasswordField
            label="Password"
            name="password"
            placeholder="1234566"
            keyboardType="default"
            icon="lock"
          />
          <AppSubmitButton title={"Login"} />
        </AppForm>
      </KeyboardAvoidingView>
    </AppSafeViewScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: -50,
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
