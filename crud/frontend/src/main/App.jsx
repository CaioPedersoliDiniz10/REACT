 import React from 'react';
 import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Home from '../components/home/Home';

export default function App() {
  return (
    <div className="app">  {/* Aplicando a classe app aqui */}
      <Logo />
      <Nav />
      <Home/>
      <Footer />
    </div>
  );
}
