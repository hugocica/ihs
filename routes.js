import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginPage from './Pages/Login'

const Routes = createStackNavigator({
  Login: { screen: LoginPage }
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

export default createAppContainer(Routes);
