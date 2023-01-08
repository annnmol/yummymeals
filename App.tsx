import { Provider } from "react-redux";

import RootNavigator from "./app/navigations/RootNavigator";
import { store } from "./app/store/Store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </>
  );
};

export default App;
