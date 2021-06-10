// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/loginForm.css';

import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RecipeCreation from './pages/RecipeCreate';
import Register from './pages/Register';


const App = () => {
  return (
   <div>
      <Route exact path='/' component={Home} />

      <Route exact path='/login' component={Login} />

      <Route exact path='/create-recipe' component={RecipeCreation} />

      <Route exact path='/register' component={Register} />
  

  </div>
    
  );
}

export default App;
