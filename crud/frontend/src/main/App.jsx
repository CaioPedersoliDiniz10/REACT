import React from 'react';
import './App.css'
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Main from '../components/template/Main';

export default function App() {
  return (
    <div className="app">  {/* Aplicando a classe app aqui */}
      <Logo />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}
