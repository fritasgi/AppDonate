import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { Store } from './redux/store/';


import ComoDoar from './components/ComoDoar.js'
import Login from './components/Login.js'
import Cadastro from './components/Cadastro'
import Feed from './components/Depoimentos'
import Perfil from './components/Perfil'

const Drawer = createDrawerNavigator();


export default function App() {
  const dimensions = useWindowDimensions();

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
          initialRouteName="Login"
        >
          <Drawer.Screen
            name="Feed"
            component={Feed}
            options={{ drawerLabel: 'Depoimentos' }}
          />
          <Drawer.Screen
            name="ComoDoar"
            component={ComoDoar}
            options={{ drawerLabel: 'Quero ser um doador' }}
          />
          <Drawer.Screen
            name="Perfil"
            component={Perfil}
            options={{ drawerLabel: 'Perfil' }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{ drawerLabel: 'Login' }}
          />
          <Drawer.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ drawerLabel: 'Cadastro' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
  