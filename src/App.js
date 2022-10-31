import React from 'react';
import RootStore from './models/RootStore';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProtectedRoute, EsriProvider,ErrorBoundary ,AuthProvider,RootProvider} from 'cms-core';



import LanguageSelector from './components/LanguageSelector'

import './App.css';


import appConfig from './config/appConfig.json';
import gisConfig from './config/gisConfig.json';
// to change to server url 
import serverConfig from './config/appConfig.json';


import ar from './config/lang/ar.json';
import en from './config/lang/en.json';

console.log(process.env.REACT_APP_API_ENDPOINT);
const rootStore = new RootStore(false, process.env.REACT_APP_API_ENDPOINT);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <Provider {...rootStore.getStores()}>
          <RootProvider config={{ appConfig, gisConfig, serverConfig }} lang={{ ar, en }}>
            <EsriProvider>
              <Router>
                <AuthProvider>
                  <LanguageSelector />
                 
                 
                </AuthProvider>
              </Router>
            </EsriProvider>
          </RootProvider>
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default App;
