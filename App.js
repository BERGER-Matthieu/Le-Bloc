import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import LoginRegister from './src/screens/auth/loginRegister';

export default function App() {
  return (
    <View>
      <LoginRegister/>
    </View>
  );
}