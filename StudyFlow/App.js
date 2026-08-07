// Esse é o nosso ponto de entrada visual do app

import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRoutes from './src/navegation/AppRoute';


export default function App() {
  return (
    <SafeAreaProvider>
      <AppRoutes/>
    </SafeAreaProvider>
  );
}

