import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,Alert } from 'react-native';


export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      uri : require('./src/images/dice1.png')
    }
  }

  playButtonPressed = () =>{

    let randomNumber = this.generateRamdomValue();

    switch (randomNumber) {
      case 1 :
        this.setState({uri : require('./src/images/dice1.png') })
        break;
      case 2 :
        this.setState({uri : require('./src/images/dice2.png') })
        break;
      case 3 :
        this.setState({uri : require('./src/images/dice3.png') })
        break;
      case 4 :
        this.setState({uri : require('./src/images/dice4.png') })
        break;
      case 5 :
        this.setState({uri : require('./src/images/dice5.png') })
        break;
      case 6 :
        this.setState({uri : require('./src/images/dice6.png') })
        break;
      default:
        break;
    }

  }

  generateRamdomValue = ()=>{
    return Math.floor(Math.random() * 6) + 1;
  }

  render() {
   return (
        <View style={styles.container}>
          <Image source={ this.state.uri }></Image>

          <TouchableOpacity onPress={ this.playButtonPressed }>
            <Text style={styles.gameButton}>Play Game</Text>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton : {
    marginTop:30,
    fontSize:20,
    color:"#fff",
    backgroundColor: "#01CBC6",
    paddingHorizontal:30,
    paddingVertical:10,
    fontWeight:"bold",
    borderRadius:5,
    borderWidth:2
  }
});
