import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getWants } from '../../data/actions/wantActions';
import styles from './Controls.css';

const Search = () => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getWants(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.usernamesearch}>
        <label className={styles.username}>Username:</label>
        <input value={user} onChange={({ target }) => setUser(target.value)} type="text"></input>
        <button type="submit">FIND DEALS</button>
      </div>
    </form>
  );
};

export default Search;
