import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import json from './products.json';
import App from './components/app';

let generateRoutes = () => {
  let container = [];
  const pages = Math.ceil(json.products.length / 6);
  for(let i = 1; i <= pages ; i++){
    let route = i.toString();
    container.push(<Route path={route}/>);
  }
  return container;
}

const routes = generateRoutes();

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/1" />
    {routes.map((route)=>{
      return route;
    })}
  </Route>
);
