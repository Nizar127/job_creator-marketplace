import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Segment, Content, Item} from 'native-base';


export default class PaidNow extends React.Component {



    render() {
     
      return (
    <Container>
             <Card>
          <CardItem header bordered>
              <Text>Backend Development</Text>
                 <Text style={{fontWeight: 'bold', fontSize: 20}}>$500</Text>
                
          </CardItem>
            
            <CardItem bordered>
              <Left>
                <Body>
                    <Text>Applicant Name:</Text>
                    <Text>ID:</Text>
                    <Text>Title:</Text>
                    <Text>Department:</Text>
                    <Text>Type of Work:</Text>
                    <Text>Description:</Text>
                    <Text>Date Start:</Text>
                    <Text>Date Finish:</Text>
                    <Text>Job Period:</Text>
                    <Text>Bank Account:</Text>
                    <Text>Payment Type:</Text>
                    <Text>Payment Status:</Text>
                </Body>
               </Left> 
               <Right>
               <Body>
                    <Text>Jameson</Text>
                    <Text>TD-IF 23450</Text>
                    <Text>Mockup Design</Text>
                    <Text>System Development</Text>
                    <Text>Contract</Text>
                    <Text>Build a Application Wireframing</Text>
                    <Text>20th August 2020</Text>
                    <Text>30th August 2020</Text>
                    <Text>10 Days</Text>
                    <Text>CIMB Bank</Text>
                    <Text>Internet Transfer</Text>
                    <Text>UNPAID</Text>
                </Body>
               </Right>
            </CardItem>
            <CardItem>
                <Text>REPORT AN ISSUE</Text>
                <Icon active name="arrow-forward"/>
            </CardItem>
            <CardItem footer bordered>
                  <Button success onPress={() => this.props.navigation.navigate('UploadSuccess')} rounded style={{padding: 5, justifyContent:'center', height: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20}}>PAID NOW</Text>
                </Button>
            </CardItem>
                
        
            
           </Card>

    </Container>
          
           

           
      );
    }
  }