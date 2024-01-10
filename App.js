import { View } from 'react-native';
import Home from './src/screens/home';
import AppStyle from './src/styles/appStyle';

export default function App() {
  return (
    <View style = {AppStyle.view}>
      <Home/>
    </View>
  );
}