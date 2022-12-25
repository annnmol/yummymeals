import React from "react";
import { StyleSheet, Text } from "react-native";
import { Theme } from "../../customization/Theme";

interface Props {
  error?: any;
  visible?: any;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppErrorMessage: React.FC<Props> = ({
  error,
  visible,
  ...otherProps
}) => {
  if (!visible || !error) return null;

  return (
    <Text style={styles.styledText} {...otherProps}>
      {error}
    </Text>
  );
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  styledText: {
    color: Theme.ERROR,
    fontSize: 13,
  },
});
