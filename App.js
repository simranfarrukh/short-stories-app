import * as React from 'react';

import { StyleSheet,TouchableOpacity, Button, View, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import ButterflyBoy from './components/ButterflyBoy';
import CinderellaShoes from './components/CinderellaShoes';
import FlightlessCanary from './components/FlightlessCanary';
import BluePerennials from './components/BluePerennials';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const image = { uri: "https://wallpaperaccess.com/full/906848.jpg" };

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Button style={styles.options}
                title="The Flightless Canary"
                onPress={() => navigation.navigate('The Flightless Canary')}
            />
            <Button
                title="Butterfly Boy"
                onPress={() => navigation.navigate('Butterfly Boy')}
            />
            <Button
                title="Cinderella's Red Shoes"
                onPress={() => navigation.navigate("Cinderella's Red Shoes")}
            />
            <Button
                title="Blue Perennials"
                onPress={() => navigation.navigate('Blue Perennials')}
            />
          </ImageBackground>
        </View>
    );
}

function CanaryScreen({navigation}) {
    return (
        <View style={styles.ssoptions}>
        <FlightlessCanary />
        </View>
    );
}

function ButterflyScreen({navigation}) {
    return (
        <View style={styles.ssoptions}>
        <ButterflyBoy />
        </View>
    );
}

function CinderellaScreen({navigation}) {
    return (
        <View style={styles.ssoptions}>
        <CinderellaShoes />
        </View>
    );
}

function BlueScreen({navigation}) {
    return (
        <View style={styles.ssoptions}>
        <BluePerennials />
        </View>
    );
}
const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="The FlightlessCanary" component={CanaryScreen} />
                <Stack.Screen name="Butterfly Boy" component={ButterflyScreen} />
                <Stack.Screen name="Cinderella's Red Shoes" component={CinderellaScreen} />
                <Stack.Screen name="Blue Perennials" component={BlueScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});

export default App;