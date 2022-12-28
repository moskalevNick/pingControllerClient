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
      {requests ? (
        requests.map((req) => (
          <>
            <div key={req.id} className={styles.requestWrapper}>
              <pre>{req.body}</pre>
            </div>
            <hr />
          </>
        ))
      ) : (
        <div className={styles.noData}>нет данных</div>
      )}
    </div>
  );
};
