import { useFormikContext } from "formik";
import React from "react";
import { ActivityIndicator, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Theme } from "../../customization/Theme";
// import { useNotification } from "../../Hooks/useNotification/useNotification";
// import AppButton from "../AppButton";

interface Props {
  title: string;
  children?: React.ReactNode;
  [otherProps: string]: any;
}
const AppSubmitButton: React.FC<Props> = ({ title, ...otherProps }) => {
  const { handleSubmit, values, errors, isSubmitting, isValid, touched } =
    useFormikContext();
  // const { showAlert } = useNotification();

  // useEffect(() => {
  //   if (!isValid && isSubmitting) {
  //     showAlert(`Please fill the required fields`, "warning");
  //   }
  // }, [isValid, isSubmitting]);

  return (
    <TouchableOpacity
      style={styles.styledButton}
      onPress={() => handleSubmit()}
      // loading={isValid && isSubmitting}
      // loadingPosition="center"
      disabled={isSubmitting}
      {...otherProps}
      activeOpacity={0.6}
    >
      {isSubmitting ? (
        <ActivityIndicator
          animating={isSubmitting}
          size="small"
          color={Theme.GREY_DARK}
        />
      ) : (
          <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppSubmitButton;

const styles = StyleSheet.create({
  styledButton: {
    backgroundColor: Theme.PRIMARY,
    width: '100%',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:4,
    marginBottom:4,
  },
  buttonText: {
    fontSize: 16,
    color:Theme.WHITE,
    letterSpacing:2,
    textTransform: 'capitalize',
  }
})
