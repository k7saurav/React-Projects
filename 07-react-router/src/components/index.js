// This file is created to import all the components in one place and export them from here, so we don't need to import every component seperatly. It is good practive to name this file as index.js. 
// Note: It should be .js not .jsx.

import Header from "./header/Header";
import Footer from "./footer/Footer";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import User from "./user/User";
import Github from "./github/Github";
import { githubInfoLoader } from "./github/Github";

export { Header, Footer, Home, About, Contact, User, Github, githubInfoLoader }