import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrimaryRoute from './routing/PrimaryRoute';
import HomePage from './layout/HomePage/HomePage';
import GistPage from './layout/GistPage/GistPage';
import GistForm from './components/GistForm/GistForm';
import ProfilePage from './layout/ProfilePage/ProfilePage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PrimaryRoute />}>
        <Route path='/' element={<HomePage />} />
        <Route path="/gists/:id" element={<GistPage />} />
        <Route path="/gists/new" element={<GistForm />} />
        <Route path="/gists/edit/:id" element={<GistForm />} />
        <Route path="/my-profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
