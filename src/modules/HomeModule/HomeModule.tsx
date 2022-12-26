import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { globalActions } from '../../redux/global/actions';
import styles from './Home.module.css';

export const HomeModule = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(globalActions.getRequests());
  }, [dispatch]);

  const { requests } = useAppSelector((state) => state.globalReducer);

  const deleteRequests = () => {
    dispatch(globalActions.deleteRequests());
  };

  return (
    <div className={styles.container}>
      <hr />
      <div className={styles.buttonWrapper}>
        <button onClick={deleteRequests}>Удалить все данные</button>
      </div>
      <hr />
      {requests.map((req) => (
        <div key={req.id} className={styles.requestWrapper}>
          <pre>{JSON.stringify(req.body, null, 2)}</pre>
          <hr />
        </div>
      ))}
    </div>
  );
};
