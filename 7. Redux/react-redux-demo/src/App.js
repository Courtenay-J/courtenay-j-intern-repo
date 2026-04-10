import './App.css';
import NewCakeContainer from './components/NewCakeContainer'
import {Provider} from 'react-redux'
import UserContainer from './components/UserContainer'
import {CounterContainer} from './components/CounterContainer'
import {DynamicMessage} from './components/DynamicMessage'

//Importing store here will provide it to every app in component tree
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CounterContainer />
        <DynamicMessage />
        <NewCakeContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
