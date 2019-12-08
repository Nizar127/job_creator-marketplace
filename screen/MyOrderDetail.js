import React, { Component } from 'react';
//import { removeStudent } from '../services/DataService';
import { Alert, View } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text, List, Header, Card, CardItem } from 'native-base';
import { db } from '../config/firebase';
import JobList from '../components/JobList';

let job = db.ref('/Job');

export default class MyOrderDetail extends Component {
  constructor(){
    super();
    this.state = {
    jobs: [],
    jobdesc:null,
    jobname:null,
    location:null,
    salary:null
    }
  }

  componentDidMount() {

    const {navigation} = this.props;
    const jobID = navigation.getParam('id');
      //query here
   let query = job.orderByChild('id').equalTo(jobID)
      //query.on .....
    query.on('value', (snapshot) => {
        let data = snapshot.val();
          if(data){
            let firebaseData = Object.values(data);
            this.setState({jobs: firebaseData},()=>{
                this.state.jobs.map((element)=>{
                    this.setState({
                        jobname:element.jobname,
                        salary:element.salary,
                        worktype:element.worktype,
                        peoplenum:element.peoplenum,
                        chosenDate:element.chosenDate,
                        location:element.location
                    })
                })
            });
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
        <Card>
            <CardItem bordered header>
    <Text style={{textAlign: "center", height: 40, fontWeight: "bold", marginTop: 20}}>{this.state.jobname}</Text>
            </CardItem>
            <CardItem>
               <Body>
                <Text>{this.state.jobdesc}</Text>
                </Body>
            </CardItem>
                 {/* <CardItem>   
                     <Text style={{marginTop: 5, marginBottom: 5}}>Creative World Industries</Text>
                </CardItem> */}
                
            </Card>
        
            <Card style={{height: 200}}>
                <CardItem header bordered>
                    <Text>Requirement</Text>
                </CardItem>
                <CardItem cardBody>
                    <Body>
                        <Text>{this.state.worktype}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Body>
                        <Text>{this.state.peoplenum}</Text>
                    </Body>
                </CardItem>
            </Card>
            <Card style={{height: auto}}> 
                <CardItem header bordered>
                    <Text>Salary</Text>
                </CardItem>
                <CardItem cardBody>
                    <Body><Text>RM {this.state.salary}</Text></Body>
                </CardItem>
            </Card>
            <Card style={{height: 250}}>
                <CardItem header bordered>
                    <Text>DATE AND LOCATION</Text>
                </CardItem>
                <CardItem cardBody>
                    <Text>{this.state.chosenDate}</Text>
                    <Text>{this.state.location}</Text>
                </CardItem>
        </Card>
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