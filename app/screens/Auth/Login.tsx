import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { AppSafeViewScreen } from "../../components";
import {
  AppForm,
  AppFormField,
  AppFormPasswordField,
  AppFormSelectField, AppSubmitButton
} from "../../components/forms";
import { loginSchema } from "../../utils/Validation";


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
    <AppSafeViewScreen style={styles.container}>
      {/* <TopItemListings/> */}
      {/* <AccountScreen/> */}
      {/* <MessageList/> */}
      {/* <SimpleCardDetails
        title="Food Burger"
        price="$6.90"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, alias. Delectus, dicta veniam quae architecto expedita, repellendus cum, dignissimos recusandae doloremque aliquam odio voluptatum distinctio? Obcaecati ipsa officia quibusdam magni."
        image={require("../../assets/images/juice.jpeg")}
      /> */}

      {/* <SimpleCard
          title="Food Buger"
          price="$6.90"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, alias. Delectus, dicta veniam quae architecto expedita, repellendus cum, dignissimos recusandae doloremque aliquam odio voluptatum distinctio? Obcaecati ipsa officia quibusdam magni.'
          image={require('../../assets/images/egg.jpeg')}
        />
        <SimpleCard
          title="Food Buger"
          price="$6.90"
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, alias. Delectus, dicta veniam quae architecto expedita, repellendus cum, dignissimos recusandae doloremque aliquam odio voluptatum distinctio? Obcaecati ipsa officia quibusdam magni.'
          image={require('../../assets/images/egg.jpeg')}
        /> */}
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

      {/* <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES_NAMES.SIGNUP)}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ROUTES_NAMES.FORGET_PASSORD, { userId: 12 })
          }
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
        </TouchableOpacity> */}
    </AppSafeViewScreen>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
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
