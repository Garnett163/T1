import React from 'react';
import styles from './ErrorApi.module.css';

interface ErrorApiProps {
  errorApi?: boolean;
  textErrorApi: string;
  classSecondary?: string;
}

function ErrorApi({ errorApi, textErrorApi, classSecondary }: ErrorApiProps) {
  if (!errorApi) {
    return null;
  }
  return <span className={`${styles.errorApi} ${classSecondary || ''}`}>{`${errorApi ? textErrorApi : ''}`}</span>;
}

export default ErrorApi;
