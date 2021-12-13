import React, { Component } from 'react';
import { Text,View, FlatList, Image } from 'react-native';

export default class BoldAndBeautiful extends Component {



  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
componentDidMount(){ 
    return fetch('http://localhost:3000/nissan')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });      
  }





  render() {
    return (
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >
          <Text style={{color:"brown",fontSize:20,textAlign:"center",marginTop:15,marginBottom:5}}   >{item.tipus_nev} </Text>
          <Image  source={{uri: 'http://localhost:3000/'+item.tipus_kep}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  

          <TouchableOpacity
        style={styles.kekgomb}
        onPress={async ()=>this.szavazat(item.tipus_id)}
      >
        <Text style={{color:"white",fontWeight:"bold",fontSize:15}}  >Erre szavazok</Text>
      </TouchableOpacity>
          </View>
        
        }

        
          keyExtractor={({tipus_id}, index) => tipus_id}
        />
      </View>
    );
  }
}