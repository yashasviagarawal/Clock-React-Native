import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = () => {
  return (
    <Appbar.Header style={{backgroundColor:'black'}}>
      <Appbar.Content title={"Stop Watch"} style={{alignItems:'center'}} />
    </Appbar.Header>
  );
};

export default Header;
