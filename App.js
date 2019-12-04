import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, Button, Image} from 'react-native';
import {Root} from 'native-base';
import Icon from '@expo/vector-icons/Ionicons';
import Progress from './main/progress';
import Profile from './main/profile';
import Search from './main/search';
import Hire from './main/hire.js';
import Support from './drawer/support';
import Notification from './drawer/notifications';
import Payment from './drawer/payment';
import Blog from './drawer/blog';
import Account from './drawer/account_settings';
import History from './drawer/history';
import PaymentDetails from './screen/PaymentDetails';
import SearchDetails from './screen/SearchDetails';
import HireDetails from './screen/HireDetails';
import HireProgress from './screen/HireProgess';
import UploadJob from './screen/UploadJob';
import UploadSuccess from './screen/UploadSuccess';
import MyJob from './drawer/myorder';
import PaidNow from './screen/paidNow';
import JobSettings from './screen/JobSettings';
import PaymentMethod from './screen/PaymentMethod';



import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from 'react-native-gesture-handler';
import ignoreWarnings from 'react-native-ignore-warnings';
ignoreWarnings('Setting a timer');

class App extends Component {
  constructor(props){
    super(props);
    this.state = { loading: true};
  }
  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading){
      return(
        <Root>
           <AppLoading/>
        </Root>
      );
    }
    return (
    <Root>
      <AppContainer />
    </Root>
    );
  }
}
export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          title="Login"
          style={{height:20, borderRadius: 25}}
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        {/* <Button title="Sign Up" onPress={() => alert('button pressed')} /> */}
      </View>
    );
  }
}



class DashboardScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}



const DashboardTabNavigator = createBottomTabNavigator(
  {
    Hire,
    Progress,
    Search,
    Profile
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    PaymentDetails:PaymentDetails,
    SearchDetails: SearchDetails,
    HireDetails:HireDetails,
    HireProgress: HireProgress,
    UploadJob:UploadJob,
    UploadSuccess: UploadSuccess,
    PaymentMethod: PaymentMethod,
    JobSettings: JobSettings,
    PaidNow: PaidNow
    
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);


const CustomDrawerContentComponent = (props) => (

  <SafeAreaView style={{flex: 1}}>
      <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
          <Image source={require('./img/dude.jpg')} style={{height: 120, width: 120, borderRadius: 60}}/>
      </View>
      <View style={{justifyContent: 'center', alignItems:'center', fontSize: 20, fontWeight: 'bold'}}>
        <Text style={{justifyContent: 'center', alignItems:'center', fontSize: 20, fontWeight: 'bold'}}>
          Hamzah
        </Text>
      </View>
      <View>
        <DrawerItems {...props}/>
      </View>
  </SafeAreaView>

);

const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: DashboardStackNavigator
  },
  Dashboard: {
    screen: DashboardTabNavigator
  },
  MyJob: {
    screen: MyJob
  },
  Notification:{
    screen: Notification
  },
  Payment:{
    screen: Payment
  },
  Inbox:{
    screen: Payment
  },
  History:{
    screen: History
  },
  Blog: {
    screen: Blog
  },
  Support: {
    screen: Support
  },
  Settings: {
    screen: Account
  },
 

},
{
  contentComponent: CustomDrawerContentComponent
});


const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator },
  Home: {screen: DashboardTabNavigator}
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
});

