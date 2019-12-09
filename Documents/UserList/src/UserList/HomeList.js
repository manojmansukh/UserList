import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator,FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import { displayData }from './Reducer/UserAction'
class HomeList extends Component {
   
    static navigationOptions = ({ navigation }) => {
        return {
          title: "Source Listing",
          headerStyle: {backgroundColor: "#fff"},
          headerTitleStyle: {textAlign: "center",flex: 1}
         };
        };
        
        constructor(props) {
         super(props);
         this.state = {
            loading: true,
           dataSource:[]
          };
        }
        componentDidMount(){
        fetch("https://jsondata123.s3-us-west-2.amazonaws.com/list.json")
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           loading: false,
           dataSource: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() =>{
            this.props.displayUser(item);
            //this.props.navigation.navigate('Details',inform:item)}}
            this.props.navigation.navigate('Details')}}>
    
                <Text style={styles.item}>
                    {item.firstName + " " + item.lastName}
                </Text>
            </TouchableOpacity>
        )
    }
    
render() {
    if(this.state.loading){
        return( 
          <View style={styles.loader}> 
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
      )}
    return (
        <View style={styles.container}>
            <FlatList
                data={this.state.dataSource}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
            />
        </View>
    );
}
}
// item1={

// }
const mapDispatchToProps = dispatch => {
    return {
        displayUser : (item) => dispatch ( displayData(item) )
    }
}

export default connect( null,mapDispatchToProps)(HomeList)
//export default HomeList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    item: {
        backgroundColor: '#0001',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,

    },
    title: {
        fontSize: 32,
    },

});