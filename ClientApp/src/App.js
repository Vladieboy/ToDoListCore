import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Dash from './components/Dash';
import {SelectedColorProvider} from "./Context"

export default (props) => {

    return (
      <SelectedColorProvider>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/dash' component={Dash} />
      </Layout>
      </SelectedColorProvider>
    );

}
