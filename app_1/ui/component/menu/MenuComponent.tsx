import * as React from 'react';
import {Button, View} from 'react-native';

/**
 * Proptypes definition for menu component.
 */
export interface IMenuComponentProps {}

/**
 * Function component definition for the menu component.
 *
 * @param props Properties for the menu component.
 * @returns Menu component.
 */
export default function MenuComponent(props: IMenuComponentProps) {
  const [state, setState] = React.useState(false);

  const onPressLearnMore: () => void = () => {
    setState(!state);
  };
  return (
    <View>
      <Button
        onPress={onPressLearnMore}
        title="MENU"
        accessibilityLabel="Click to open the drop down menu."
      />
      {state && <DropDownMenu />}
    </View>
  );
}

function DropDownMenu() {
  return <></>;
}
