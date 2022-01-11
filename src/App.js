import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Menu from './Layout/Menu';


const HomePage = React.lazy(() => import('./Pages/HomePage'))
const ProductListPage = React.lazy(() => import('./Pages/ProductListPage'))
const CategoryListPage = React.lazy(() => import('./Pages/CategoryListPage'))
const UserListPage = React.lazy(() => import('./Pages/UserListPage'))
const AddProductPage = React.lazy(() => import('./Pages/AddProductPage'))
const AddCategoryPage = React.lazy(() => import('./Pages/AddCategoryPage'))
const EditPage = React.lazy(() => import('./Pages/EditPage'))
const EditCategoryPage = React.lazy(() => import('./Pages/EditCategoryPage'))
const LoginPage = React.lazy(() => import('./Pages/LoginPage'))
const ChartProductPage = React.lazy(() => import('./Pages/ChartProductPage'))
const ChartSoldPage = React.lazy(() => import('./Pages/ChartSoldPage'))
const BillPage = React.lazy(() => import('./Pages/BillPage'))
const BillDetailPage = React.lazy(() => import('./Pages/BillDetailPage'))
// const NotFoundPage = React.lazy(() => import('./Pages/NotFoundPage'))

function App() {
  const LoginContainer = (adminInfo) => (
    <>
      <Redirect exact="/" to="/login" />
      <Route path="/login" component={LoginPage} />
    </>

  )

  const DefaultContainer = () => (
    <>
      <Menu />
      <>

        <Route exact path='/home' component={HomePage} />
        <Route exact path='/product/:id/edit' component={EditPage} />
        <Route exact path='/category/:id/edit' component={EditCategoryPage} />
        <Route exact path='/products' component={ProductListPage} />
        <Route exact path='/categories' component={CategoryListPage} />
        <Route exact path='/users' component={UserListPage} />
        <Route exact path='/add/products' component={AddProductPage} />
        <Route exact path='/add/categories' component={AddCategoryPage} />
        <Route exact path='/chart_product' component={ChartProductPage} />
        <Route exact path='/chart_sold' component={ChartSoldPage} />
        <Route exact path='/bills' component={BillPage} />
        <Route exact path='/bill/:id/detail' component={BillDetailPage} />
        {/* <Redirect exact="/" to="/home" /> */}
        {/* <Route component={NotFoundPage} /> */}
      </>
    </>
  )

  return (

    <div className="App">
      <Suspense fallback={<h2>Loading...</h2>}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/(login)" component={LoginContainer} />
            <Route component={DefaultContainer} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>


  );
}

export default App;
