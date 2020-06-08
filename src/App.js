import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import './App.scss'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import ProductPage from './pages/product/product.component';
import Agenda from './pages/agenda/agenda.component';
import SearchResult from './pages/search-result/search-result.component';
import MenuDropdown from './components/menu-dropdown/menu-dropdown.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectMenuHidden } from './redux/menu/menu.selectors';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          })
      } else {
        setCurrentUser(userAuth);
      }
    })
  }
  

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return(
      this.props.menuHidden ? 
      <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/produtos' component={ShopPage} />
        <Route path={`/produto/:categoryId/:productId`} component={ProductPage} />
        <Route path={`/buscar/:searchId`} component={SearchResult} />
        <Route exact path='/finalizar-compra' component={CheckoutPage} />
        <Route exact path='/agenda' component={Agenda} />
        <Route exact path='/login' render={() => this.props.currentUser ? (
          <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
            ) } />
      </Switch>
      <Footer />
    </div>
    : <MenuDropdown />
    )
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  menuHidden: selectMenuHidden
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);