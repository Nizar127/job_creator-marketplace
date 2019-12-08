import React, { Component } from 'react';
//import { removeStudent } from '../services/DataService';
import { Alert, View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Header } from 'native-base';
import { db } from '../config/firebase';
import JobList from '../components/JobList';

let job = db.ref('/Job');

export default class MyJob extends Component {
  constructor(){
    super();
    this.state = {
    jobs: []
    }
  }

  componentDidMount() {
    job.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({jobs: firebaseData});
            console.log(this.state.jobs);
          }
     });
  }

//   deleteConfirmation= (matricno) => {
//     Alert.alert(
//       'Status', 
//       'Are you sure you want to delete this student?',
//       [
//         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
//         {text: 'OK', onPress: () => removeStudent(matricno)}
//       ],
//       { cancelable: false }
//       );
//   }

  render() {
    return (
      <Container>
         <Header>
            <View style={{marginTop:25, marginEnd: 350}}>
              <Icon style={{color:'white'}} name="md-menu" onPress={()=>this.props.navigation.openDrawer()}/>
            </View>
       </Header>

        <Content padder>
        <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>Job List</Text>
        <List vertical={true}>
        <JobList jobs={this.state.jobs}  />
        </List>
        <Text>{this.state.salary}</Text>
        </Content>



        <Footer>
          <FooterTab>
            <Button vertical onPress={() => {this.props.navigation.navigate('UploadJob')}}>
              <Icon name="briefcase" />
              <Text>New Job</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}