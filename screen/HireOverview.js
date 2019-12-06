import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Tab, Tabs, TabHeading, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';
import WorkerHome from '../tab/searchHome';
import WorkerDetails from '../tab/searchDetails';
import UserProfile from '../screen/UserProfile';
import HireDetails from '../screen/HireDetails';

export default class HireOverview extends React.Component {



    render() {
     
      return (
    <Container>
       
        
           {/* <Header hasTabs /> */}
         
             
         
           <Tabs style={{fontColor: '#0000ff',backgroundColor: '#dcedc1'}}>
   
             <Tab heading={ <TabHeading><Text style={{color:'white'}}>Home</Text></TabHeading>}>
               <HireDetails/>
             </Tab>
             <Tab heading={ <TabHeading><Text style={{color: 'white'}}>Details</Text></TabHeading>}>    
               <UserProfile/>
             </Tab>
            
           </Tabs>
        


         

        </Container>
      );
    }
  }