import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

// console.log("Hola, mundo!")

const $app = document.getElementById('app');
// const $holaMundo = <h1>Hola, mundo!!!</h1>;

render(<Media title="¿Qué es responsive design?" author="Isaac Salcedo" image="./images/covers/responsive.jpg" />, $app);
