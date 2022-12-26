import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const activeStyle = {
    fontWeight: '700',
    color: '#000000',
    borderBottom: '3px solid #000000',
    transition: 'all .2s',
  };

  return (
    <div className={styles.container}>
      <NavLink
        to='/'
        end
        className={styles.section}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Данные
      </NavLink>
      <NavLink
        to='/request'
        className={styles.section}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Отправить запрос
      </NavLink>
    </div>
  );
};
