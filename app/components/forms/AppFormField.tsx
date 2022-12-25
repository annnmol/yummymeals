import React, { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { Theme } from "../../customization/Theme";
import AppErrorMessage from "./AppErrorMessage";
import { KeyboardTypeOptions, Text, TextInput, View, StyleSheet } from "react-native";
import AppText from "../AppText";

interface Props {
  label?: string;
  name: string;
  tooltip?: any;
  divStyle?: any;
  keyboardType?: KeyboardTypeOptions | undefined;
  sendValuesToParent?: (values: any) => void | undefined;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppFormField: React.FC<Props> = ({
  label,
  name,
  tooltip,
  divStyle,
  sendValuesToParent,
  keyboardType='default',
  children,
  ...otherProps
}) => {
  const {
    setFieldTouched,
    handleChange,
    errors,
    touched,
    // getFieldMeta,
    // initialValues,
    setFieldValue,
    values,
  } = useFormikContext<any>();

  useEffect(() => {
    if (sendValuesToParent) {
      sendValuesToParent(values);
    }
  }, [values]);


  const [isFieldFocused, setIsFieldFocused] = useState<boolean>(false);

  return (
  
     <View style={styles.styledView}>
      <AppText variant="label">{label}</AppText>
      <TextInput
        {...otherProps}
        onChangeText={(e: any) => setFieldValue(name, e)}
        value={values[name]}
        keyboardType={keyboardType} 
        placeholderTextColor={Theme.GREY_DARK}
        onBlur={() => { setFieldTouched(name); setIsFieldFocused(false)}}
        onFocus={() => { setIsFieldFocused(true) }}
        style={[styles.styledInput, {
          borderColor: isFieldFocused ? Theme.PRIMARY :
            errors[name] && touched[name]
            ? Theme.ERROR
            : Theme.TRANSPARENT,
        }]}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
     </View> 
  );
};

export default AppFormField;

const styles = StyleSheet.create({
  styledView: {
    position: 'relative',
    paddingHorizontal: 8,
    marginBottom: 8,
    justifyContent: 'space-between',
    alignItems:'flex-start',
  },
  
  styledInput: {
    width: 330,
    height: 48,
    backgroundColor: Theme.SECONDARY,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 6,
    marginBottom: 4,
    fontFamily: Theme.FONT_MEDIUM,
    letterSpacing:1,
  }

})






