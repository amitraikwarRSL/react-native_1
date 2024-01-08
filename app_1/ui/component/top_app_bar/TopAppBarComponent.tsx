import * as React from 'react';
import {Text, View} from 'react-native';
import {style} from '../top_app_bar/Styles';
/**
 * Props definition for the Top app bar for the app.
 */
export interface ITopAppBarComponentProps {
  title: string;
}

/**
 * Function component definition for the Top app bar component.
 *
 * @param props Properties for the top app bar components
 * @returns
 */
export function TopAppBarComponent(props: ITopAppBarComponentProps) {
  return (
    <View style={style.container}>
      <Text style={style.appBarText}>{props.title}</Text>
    </View>
  );
}
