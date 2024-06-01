import { StyleSheet } from 'react-native';
import store from './store/store';
import TabNavigation from './components/Navigation/TabNavigation';
import {Provider} from "react-redux";


export default function App() {
  return <Provider store={store} >
    <TabNavigation />
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
