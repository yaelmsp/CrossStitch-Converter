import { StyleSheet,View} from 'react-native'
import Main from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calculate from './screens/Calculate';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer style={styles.menu}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen name="Calculator" component={Calculate} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu:{
    backgroundColor:'red'
  }
});
