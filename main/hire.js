import React, {Component} from 'react';
import {Alert} from 'react-native';
import { 
    Container,
    Header,
    Content,
    Right,
    View,
    Fab,
    Card, 
    H1, 
    CardItem,
    Thumbnail,
    Text, 
    Left,
    Body,
    Icon, 
    Separator,
    Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';



export default class Hire extends Component {
  
    static navigationOptions = {
      title: 'Hire',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="briefcase" style={{ color: tintColor }} />
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
              <ScrollView>

              
             <Container> 
        <Content >
      
          <Separator>
            <Text style={{alignItems:'center', justifyContent: 'center', fontSize: 20}}>List Of Hires</Text>
          </Separator>
          
       
       <Card style={{marginBottom: 5}}> 
          <CardItem header bordered>
              <Text>System Development</Text>
          </CardItem>
            <CardItem bordered>
                <Left>
                    <Thumbnail source={require('../img/kambing.jpg')}/>
                <Body>
                    <Text>Hassan</Text>
                    <Text note>PHP</Text>
                    <Text note>Building Likes System</Text>
                </Body>
                </Left>       
                <Right>
                    <Button success onPress={() => this.props.navigation.navigate('HireOverview')}>

                        <Text>Hire</Text>
                    </Button>
                </Right>
           </CardItem>
           
            <CardItem bordered>
                <Left>
                    <Thumbnail source={require('../img/kambing.jpg')}/>
                <Body>
                    <Text>Faris</Text>
                    <Text note>PHP</Text>
                    <Text note>Building Comment System</Text>
                </Body>
                </Left>       
                <Right>
                    <Button success>
                        <Text>Hire</Text>
                    </Button>
                </Right>
           </CardItem>
          </Card>

          <Card>
          <CardItem header bordered>
              <Text>Backend Development</Text>
          </CardItem>
            <CardItem bordered>
                <Left>
                    <Thumbnail source={require('../img/kambing.jpg')}/>
                <Body>
                    <Text>Hassan</Text>
                    <Text note>Firebase</Text>
                    <Text note>Build Realtime Database System</Text>
                </Body>
                </Left>       
                <Right>
                    <Button success>
                        <Text>Hire</Text>
                    </Button>
                </Right>
           </CardItem>
         
            <CardItem bordered>
                <Left>
                    <Thumbnail source={require('../img/kambing.jpg')}/>
                <Body>
                    <Text>Faris</Text>
                    <Text note>PHP</Text>
                    <Text note>Building Comment System</Text>
                </Body>
                </Left>       
                <Right>
                    <Button success>
                        <Text>Hire</Text>
                    </Button>
                </Right>
           </CardItem>
          </Card>
         
        </Content>

       
      </Container>
      </ScrollView>

       <Fab style={{backgroundColor: '#66cd00'}} onPress={() => this.props.navigation.navigate('UploadJob')}>
   
         <Icon name="add" />
      </Fab>

   </Container>
      );
    }
  }
  