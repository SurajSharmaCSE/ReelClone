// import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import { AuthProvider } from './Context/AuthContext';

// export const AuthContext = createContext(null);

function App() {
  return (
    <BrowserRouter>
   <AuthProvider> 
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;