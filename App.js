import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientListScreen from './screens/ClientListScreen';
import ClientFormScreen from './screens/ClientFormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ClientList">
        <Stack.Screen 
          name="ClientList" 
          component={ClientListScreen} 
          options={{ title: 'Lista de Clientes' }}
        />
        <Stack.Screen 
          name="ClientForm" 
          component={ClientFormScreen} 
          options={{ title: 'Formulário de Cliente' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}