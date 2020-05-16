import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FullPageScroll from './pages/FullPageScroll';
import ContainerScroll from './pages/ContainerScroll';
import Header from './components/Header';

function App() {
  return (
    <div className="demo-app">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={FullPageScroll} />
          <Route exact path="/container" component={ContainerScroll} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
