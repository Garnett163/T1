import styles from './ErrorApi.module.css';

interface ErrorApiProps {
  errorApi: boolean;
  textErrorApi: string;
}

function ErrorApi({ errorApi, textErrorApi }: ErrorApiProps) {
  return <span className={styles.errorApi}>{`${errorApi ? textErrorApi : ''}`}</span>;
}

export default ErrorApi;
