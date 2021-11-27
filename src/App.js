import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Menu from './Layout/Menu';



const HomePage = React.lazy(() => import('./Pages/HomePage'))
const ProductListPage = React.lazy(() => import('./Pages/ProductListPage'))
const UserListPage = React.lazy(() => import('./Pages/UserListPage'))
const AddProductPage = React.lazy(() => import('./Pages/AddProductPage'))
const EditPage = React.lazy(() => import('./Pages/EditPage'))
const LoginPage = React.lazy(() => import('./Pages/LoginPage'))
const NotFoundPage = React.lazy(() => import('./Pages/NotFoundPage'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <BrowserRouter>

          <Menu />
          <Switch >
            <Redirect exact from='/' to='/home' />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/product/:id/edit' component={EditPage} />
            <Route exact path='/products' component={ProductListPage} />
            <Route exact path='/users' component={UserListPage} />
            <Route exact path='/add' component={AddProductPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch >

        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
