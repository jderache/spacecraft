import React from 'react';
import { Title } from 'react-native-paper';


const Header = ( {title}:{title:string} ) => (
  <Title className='text-4xl font-bold text-center text-white'>{title}</Title>
);

export default Header;