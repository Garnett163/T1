import React from 'react';
import styles from './ErrorApi.module.css';

interface ErrorApiProps {
  errorApi: boolean;
  textErrorApi: string;
}

function ErrorApi({ errorApi, textErrorApi }: ErrorApiProps) {
  if (!errorApi) {
    return null;
  }
  return <span className={styles.errorApi}>{`${errorApi ? textErrorApi : ''}`}</span>;
}

export default ErrorApi;
