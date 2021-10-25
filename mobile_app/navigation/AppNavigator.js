import {createStackNavigator} from'react-navigation-stack';
import {createAppContainer, createDrawerNavigation, createSwitchNavigator} from'react-navigation';
import AboutScreen from '../screens/AboutScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DashboardScreen from '../screens/Dashboards';
import DeviceScreen from '../screens/DeviceScreen';


const AppNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    About: AboutScreen,
    Home: HomeScreen,
    Dashboard: DashboardScreen,
    Device: DeviceScreen
    }
);

export default createAppContainer(AppNavigator);