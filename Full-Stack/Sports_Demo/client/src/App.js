import React from 'react'
import {Router} from '@reach/router'
import IndexView from './views/Index'
import CreateView from './views/Create'
import DetailView from './views/Detail'
import EditView from './views/Edit'


import './App.css';

function App() {
  return (
    <div>
      <Router>
          <IndexView path='/'/>
          <CreateView path='/create'/>
          <DetailView path='/:id'/>
          <EditView path='/:id/edit'/>
      </Router>
    </div>
  );
}

export default App;
