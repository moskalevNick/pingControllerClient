import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomeModule } from './modules/HomeModule/HomeModule';
import { Layout } from './modules/Layout/Layout';
import { RequestModule } from './modules/RequestModule/RequestModule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomeModule />} />
          <Route path='/request' element={<RequestModule />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
