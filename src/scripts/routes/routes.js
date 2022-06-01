import RestaurantList from '../views/pages/restaurant-list';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': RestaurantList, // default page
  '/home': RestaurantList,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
