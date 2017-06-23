import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import json from './products.json';
import App from './components/app';

//generate routes according the dimension of the json object and considering 6 products per page
//if the json data grows, automatically more routes are created
const routes = (() => {
  let container = [];
  const pages = Math.ceil(json.products.length / 6);
  for(let i = 1; i <= pages ; i++){
    let route = i.toString();
    container.push(<Route key={i} path={route}/>);
  }
  return container;
})();

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/1" />
    {routes.map((route)=>{
      return route;
    })}
  </Route>
);
