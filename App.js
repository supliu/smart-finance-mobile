import React, { useState } from 'react';
import { Dimensions, Text, TouchableWithoutFeedback, View } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import ExpensesPage from './pages/ExpensesPage';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';

export default function App() {

  const [displayMenu, setDisplayMenu] = useState('display');
  const [page, setPage] = useState('home');

  const openMenu = function() {
    setDisplayMenu('display');
  }

  const closeMenu = function() {
    setDisplayMenu('none');
  }

  const changePage = function(page) {
    setPage(page);
    setDisplayMenu('none');
  }

  var component = <HomePage />;

  if(page == 'receitas'){
    component = <RecipesPage />
  }

  if(page == 'despesas'){
    component = <ExpensesPage />
  }

  return (
    <View style={{ flexDirection: 'row', height: '100%', width: '100%' }}>

      <Menu display={displayMenu} onTouchItem={changePage} />

      <TouchableWithoutFeedback onPress={closeMenu}>
            <View style={{ backgroundColor: '#b6d7a8', flexGrow: 1 }}>

              <Header onPressMenuIcon={openMenu} />

              {component}
        
            </View>
      </TouchableWithoutFeedback>

    </View>
  );
}

