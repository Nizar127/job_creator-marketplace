import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Tab, Tabs, TabHeading, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';
import WorkerHome from '../tab/searchHome';
import WorkerDetails from '../tab/searchDetails';

export default class SearchDetails extends React.Component {



    render() {
     
      return (
    <Container>
       
        
           {/* <Header hasTabs /> */}
         
             
         
           <Tabs style={{fontColor: '#0000ff',backgroundColor: '#dcedc1'}}>
   
             <Tab heading={ <TabHeading><Text>Home</Text></TabHeading>}>
               <WorkerHome/>
             </Tab>
             <Tab heading={ <TabHeading><Text>Job Details</Text></TabHeading>}>    
               <WorkerDetails/>
             </Tab>
            
           </Tabs>
        


         

        </Container>
      );
    }
  }