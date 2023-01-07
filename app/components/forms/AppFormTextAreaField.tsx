import { useFormikContext } from "formik";
import React, { memo, useEffect } from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from "react-native";
import { Theme } from "../../utils";
import AppIcon from "../AppIcon";
import AppText from "../AppText";
import AppErrorMessage from "./AppErrorMessage";

interface Props {
  label?: string;
  name: string;
  icon?: string;
  divStyle?: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  sendValuesToParent?: (values: any) => void | undefined;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppFormTextAreaField: React.FC<Props> = ({
  label,
  name,
  divStyle,
  icon,
  sendValuesToParent,
  keyboardType = "default",
  children,
  ...otherProps
}) => {
  const { setFieldTouched, errors, touched, setFieldValue, values } =
    useFormikContext<any>();

  useEffect(() => {
    if (sendValuesToParent) {
      sendValuesToParent(values);
    }
  }, [values]);

  return (
    <View style={styles.styledView}>
      <AppText variant="label">{label}</AppText>
      <View style={styles.inputContainer}>
        {icon && (
          <AppIcon
            name={icon}
            style={styles.icon}
            size={20}
            color={
              !errors[name] && values[name] ? Theme.SUCCESS : Theme.GREY_DARK
            }
          />
        )}
        <TextInput
          {...otherProps}
          multiline
          numberOfLines={4}
          onChangeText={(e: any) => setFieldValue(name, e)}
          value={values[name]}
          keyboardType={keyboardType}
          placeholderTextColor={Theme.PLACEHOLDER}
          onBlur={() => {
            setFieldTouched(name);
          }}
          style={[
            styles.styledInput,
            {
              borderColor:
                !errors[name] && values[name]
                  ? Theme.SUCCESS
                  : errors[name] && touched[name]
                  ? Theme.ERROR
                  : Theme.BORDER_COLOR,
            },
          ]}
        />
      </View>

      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default AppFormTextAreaField;

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
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    zIndex: 1,
    left: 10,
    // top: 15,
  },

  styledInput: {
    width: "100%",
    minHeight: 48,
    backgroundColor: Theme.SECONDARY,
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 6,
    marginBottom: 4,
    letterSpacing: 1,
  },
});
