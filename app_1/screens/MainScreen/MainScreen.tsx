import React from 'react';
import {View} from 'react-native';
import {style} from './Styles';
import {TopAppBarComponent} from '../../ui/component/top_app_bar/TopAppBarComponent';

/**
 * Props definition for the Mainscreen component.
 */
interface Props {}

/**
 * Functional component for the main screen component.
 *
 * @param props Properties for the main screen.
 * @returns Mainscreen component.
 */
const MainScreen = (props: Props) => {
  return (
    <View style={style.container}>
      <TopAppBarComponent title="Top app bar" />
      <Content />
    </View>
  );
};

export default MainScreen;

function Content() {
  return <View style={style.contentContainer}></View>;
}
