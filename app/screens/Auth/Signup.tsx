import {
  KeyboardAvoidingView,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { AppSafeViewScreen } from "../../components";
import {
  AppForm,
  AppFormField,
  AppFormPasswordField,
  AppSubmitButton,
} from "../../components/forms";
import { Image } from "react-native-expo-image-cache";
import { RegisterSchema } from "../../utils/ValidationSchema";
import useAuthService from "../../services/authServices/useAuthService";
import { UserCredential } from "firebase/auth";

interface Props {
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const Signup: React.FC<Props> = ({ children, ...otherProps }) => {
  const { logOut, logIn, register } = useAuthService();
  const [userInput, setUserInput] = useState<any>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmitBtn = async (values: any, SubmitProps: any) => {
    // console.log("values are", values, SubmitProps);
    SubmitProps.setSubmitting(true);

    await register(values?.email, values?.password)
      .then((response: UserCredential) => {
        console.log("response", response);
      })
      .catch((error: any) => {
        console.log("error", error?.message);
      })
      .finally(() => {
        SubmitProps.setSubmitting(false);
      });
  };

  return (
    <AppSafeViewScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          tint={"light"}
          uri={require("../../assets/images/logo.png")}
          // preview={preview}
          transitionDuration={200}
        />
      </View>
      <KeyboardAvoidingView style={styles.formContainer}>
        <AppForm
          initialValues={userInput}
          onSubmit={(values: any, submitProps: any) => {
            handleSubmitBtn(values, submitProps);
          }}
          validationSchema={RegisterSchema}
        >
          <AppFormField
            label="Name"
            name="fullName"
            placeholder="Anmol Singh"
            keyboardType="default"
            icon="account"
          />
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
          <AppFormPasswordField
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Strong&*6a%"
            keyboardType="default"
            icon="lock-check"
          />
          <AppSubmitButton title={"Register"} />
        </AppForm>
      </KeyboardAvoidingView>
    </AppSafeViewScreen>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    resizeMode: "center",
  },
});
