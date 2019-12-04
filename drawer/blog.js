import React from 'react';
import {StyleSheet, Text, List, View, Slider, ScrollView, Image, Alert} from 'react-native';
import { Container, Card, CardItem, Header, Left, Body, Thumbnail, Right, Button, Icon, Title, Separator, Segment, Content, Item} from 'native-base';


export default class Blog extends React.Component {



    render() {
     
      return (
        <Container>
            <Header>
       <View style={{marginTop:25, marginEnd: 350}}>
           <Icon style={{color:'white'}} name="md-menu" onPress={()=>this.props.navigation.openDrawer()}/>
       </View>
       </Header>

          <ScrollView style={{flex:1}}>
            <Container>
              <Content>
                 <Separator>
                    <Text style={{fontSize: 20, justifyContent: 'center'}}>BLOG</Text>           
                  </Separator>           
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
           </Card>
           </Content>
            </Container>
        </ScrollView>
        
        </Container>
  
      );
    }
  }