import React, {Component} from 'react';
import { Container, Header, Content, TabHeading,View, Separator,H1, Tab, Tabs, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import CurrentJob from '../tab/current_job';
import JobDone from '../tab/job_done';
import Incoming from '../tab/incoming_job';



export default class Progress extends Component {
  
    static navigationOptions = {
      title: 'Work Progress',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="stats" style={{ color: tintColor }} />
        ),
        headerTitle:{
           title: 'GET-THE-JOB'
        },
      headerStyle: {
      backgroundColor: '#f45fff',
    },
      headerTintColor: '#fff',
      headerTitleStyle: {
          fontWeight: 'bold',
      },
    }
  
    render() {
      return (
     
      <Container>  
        
        <Content>
   
       
          <Separator>
            <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>Work Progress</Text>
          </Separator>
          
      
        <Tabs>

          <Tab heading={ <TabHeading><Text>Done!</Text></TabHeading>}>
            <JobDone />
          </Tab>
          <Tab heading={ <TabHeading><Text>Current Work</Text></TabHeading>}>    
                  <CurrentJob/>
          </Tab>
          <Tab heading={ <TabHeading><Text>Incoming</Text></TabHeading>}>          
            <Incoming/>
          </Tab>
        </Tabs>
        </Content>

   </Container>
      );
    }
  }
  