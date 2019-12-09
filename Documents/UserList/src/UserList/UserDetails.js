import React, {Component} from'react';
import { Text,View,StyleSheet} from'react-native';
import { connect } from 'react-redux'

class UserDetails extends Component{
    
    static navigationOptions = ({ navigation }) => {
        return {
          title: "User Details",
          headerStyle: {backgroundColor: "#fff"},
          headerTitleStyle: {textAlign: "center",flex: 1}
         };
        };
    //     constructor(props) {
    //      super(props);
    //      this.state = {
    //        dataSource:[]
    //       };
    //     }
    // componentDidMount(){
    //     fetch("https://jsondata123.s3-us-west-2.amazonaws.com/list.json")
    //     .then(response => response.json())
    //     .then((responseJson)=> {
    //       this.setState({
    //        loading: false,
    //        dataSource: responseJson
    //       })
    //     })
    //     .catch(error=>console.log(error)) //to catch the errors if any
    //     }
        
     render() {
        
    //     var info1 = this.props.navigation.state.params.inform;
    //     var arrData = [];
    //     arrData = this.state.dataSource;
    
    //     for (let i in arrData) {
    //         var temp=arrData[i].firstName+" "+arrData[i].lastName;
    //         var info=info1.firstName+" "+info1.lastName;
    //         if (info === temp) {
    
    //             var firstName = "First Name : " + arrData[i].firstName;
    //             var lastName = "Last Name : " + arrData[i].lastName;
    //             var place = "Place : " + arrData[i].place;
    //             var state = "State : " + arrData[i].state;
    //             var DOB = "DOB : " + arrData[i].dob;
    //             var mobileNumber = "Mobile Number : " + arrData[i].mobileNumber;
    //         }
    //     }
        return (
            <View style={styles.container}>
                <View style={styles.RectangleShapeView}>
                    <Text style={styles.userItem}>{"First Name : " +this.props.firstName}</Text>
                    <Text style={styles.userItem}>{"Last Name : " + this.props.lastName}</Text>
                    <Text style={styles.userItem}>{"Place : " + this.props.place}</Text>
                    <Text style={styles.userItem}>{"State : " + this.props.state}</Text>
                    <Text style={styles.userItem}>{"DOB : " +this.props.dob}</Text>
                    <Text style={styles.userItem}>{"Mobile Number : "+ this.props.mobileNumber}</Text>
                </View>
            </View>
        )


    }
}
 const mapStateToProps =state => {
    return {
        firstName:state.firstName,
        lastName:state.lastName,
        place:state.place,
        state:state.state,
        dob:state.dob,
        mobileNumber:state.mobileNumber

    }
}

export default connect( mapStateToProps)(UserDetails)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userItem: {
        marginTop: 7,
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    RectangleShapeView: {
        justifyContent: 'center',
        marginTop: 20,
        height: 220,
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
        backgroundColor: 'lavender',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8
    }
});