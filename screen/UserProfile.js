import React, {Component} from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import { 
    Container, 
    Header, 
    Content, 
    View, 
    Card,  
    Right, 
    auto, 
    CardItem,
    Thumbnail, 
    Text, 
    Left, 
    Body, 
    Icon, 
    List,
    ListItem,
    Separator,
    Tabs,
    Tab,
    TabHeading,
    Button } from 'native-base';
    var BUTTONS = [
      { text: "Urgent", icon: "american-football", iconColor: "#2c8ef4" },
      { text: "Part Time", icon: "analytics", iconColor: "#f42ced" },
      { text: "Contract", icon: "aperture", iconColor: "#ea943b" },
      { text: "Per KPI", icon: "aperture", iconColor: "#ea943b" },
      { text: "Hire As You Need", icon: "aperture", iconColor: "#ea943b" },
    ];
    

export default class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
      return (
          
    <Container>
         <ScrollView>
            <Card style={{alignItems: 'center', justifyContent: 'center', height: 400, width: auto}} >
                <CardItem>
                   
                    <Text style={{justifyContent:'center', marginTop: 20}}>
                        Profile
                    </Text>
                    <Right style={{ marginTop: 10}}>
                        <Button success onPress={() =>
                           ActionSheet.show(
                           {
                              options: BUTTONS,
                               title: "Please Pick Your Work Requirement"
                           },
                            buttonIndex => {
                                this.setState({ clicked: BUTTONS[buttonIndex] });
                             }
                            )}>
                            <Text>REQUEST</Text>
                        </Button>

                    </Right>
                </CardItem>
                <CardItem style={{marginTop: 5}} >
                     <Thumbnail large source={require('../img/kambing.jpg')} style={{alignSelf: 'center'}}/>
                     <Right><Text style={{color: 'green', marginStart: 10, marginEnd: 5}}>90% Job Rate</Text></Right>
                     </CardItem>
                     <CardItem>
                       <Text>James Corden</Text>
                    </CardItem>
                    <CardItem>
                       <Text note><Icon name="pin"/> Kuala Terengganu, Malaysia</Text>
                     </CardItem>
                     <CardItem style={{justifyContent: 'center', margin: 30}}>
                     <Button rounded 
                      onPress={() => this.props.navigation.navigate('./ViewCalendar')}
                     style={{
                         backgroundColor: '#f5f5f5',
                         color: 'black',
                          fontSize: 10, 
                          shadowColor: 'black', 
                           shadowOpacity: 0.3}}
                          >
                               <Text style={{color: 'black'}}>
                                  View Availability
                               </Text>
                               
                           </Button>
                </CardItem> 
            </Card>
        {/* <ScrollView>
            {/* <View style={{marginTop: 20, flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch'}}>
                       
                 
               
            </View> 
          </ScrollView>       */}
        
       
            

            </ScrollView>

         </Container>

      );
    }
  }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//     },

//     rvMarker: {
//       backgroundColor: '#FFBA5A',
//     },
//     tentMarker: {
//       backgroundColor: '#FF7657',
//     },
//     settings: {
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     options: {
//       flex: 1,
//       paddingHorizontal: 14,
//     },
//     tabs: {
//       flex: 1,
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'flex-end',
//     },
//     tab: {
//       paddingHorizontal: 14,
//       marginHorizontal: 10,
//       borderBottomWidth: 3,
//       borderBottomColor: 'transparent',
//     },
//     tabTitle: {
//       fontWeight: 'bold',
//       fontSize: 14,
//       marginBottom: 10,
//     },
//     activeTab: {
//       borderBottomColor: '#FF7657',
//     },
//     activeTabTitle: {
//       color: '#FF7657',
//     },
   
//   });
  