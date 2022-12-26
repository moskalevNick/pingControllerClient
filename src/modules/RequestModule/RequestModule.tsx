import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { globalActions } from '../../redux/global/actions';
import styles from './Request.module.css';

export const RequestModule = () => {
  const dispatch = useAppDispatch();
  const { response } = useAppSelector((state) => state.globalReducer);
  const [textAreaValue, setTextAreaValue] = useState('');

  useEffect(() => {
    dispatch(globalActions.getResponse());
  }, []);

  useEffect(() => {
    if (response) {
      setTextAreaValue(JSON.stringify(response.body, null, 2));
    }
  }, [response]);

  const saveReq = () => {
    dispatch(globalActions.createResponse(JSON.parse(textAreaValue)));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Введите ответ на запрос:</div>
      <textarea
        className={styles.textArea}
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />
      <button onClick={saveReq}>сохранить</button>
    </div>
  );
};
