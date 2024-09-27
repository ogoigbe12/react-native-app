import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';


export default function App() {
    return (
      <View style={Styles.container}>
        <Text>Aora!</Text>
        <StatusBar style='auto'/>
        <Link href='/profile' style = {{color:'blue'}}>Go To Profile</Link>
        </View>
    );
  }
  const  Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    });