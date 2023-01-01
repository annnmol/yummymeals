import { StyleProp, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AppSafeViewScreen } from '../../components';

interface Props {
  // style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const SearchScreen: React.FC<Props> = ({ children, ...otherProps }) => {
 return (
    <AppSafeViewScreen style={[styles.container]}>
      <Text>SearchScreen</Text>
    </AppSafeViewScreen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
    }
});