// Centraliza a navegação do aplicativo.

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";

// A ideia deste arquivo é  separar a regra de navegação das telas

// Cria um objeto que gerencia uma pilha de telas.
const Stack = createNativeStackNavigator();
export default function AppRoutes() {
    return (
        //ele envolve todos os navegadores

        <NavigationContainer>
            {/* criar as nossas navegações  */}
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{
                    // Oculta o cabecalho padrão
                    headerShown: false,
                }}>
                <Stack.Screen name="Splash" component={SplashScreen} />





            </Stack.Navigator>
        </NavigationContainer>
    )
}