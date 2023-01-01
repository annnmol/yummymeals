import { StyleProp, StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  style?: StyleProp<any>;
  children?: React.ReactNode;
  [otherProps: string]: any;
}

const AppItemSeparator: React.FC<Props> = ({ style, children, ...otherProps }) => {
 return (
    <View style={[styles.container , style && style]}>
    </View>
  );
};

export default AppItemSeparator;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 1,
        marginVertical: 1,
        // backgroundColor:'red'
    }
});