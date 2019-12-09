
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeList from './HomeList'
import DetailsScreen from './UserDetails';

const RootStack = createStackNavigator(
  {
    Home: HomeList,
    Details: DetailsScreen ,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;