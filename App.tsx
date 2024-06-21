import React from "react";
import Rootnavigator from "./src/utils/Rootnavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/redux/store";

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Rootnavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
