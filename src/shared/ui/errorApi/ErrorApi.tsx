import styles from './ErrorApi.module.css';

interface ErrorApiProps {
  errorApi: boolean;
}

function ErrorApi({ errorApi }: ErrorApiProps) {
  return <span className={styles.errorApi}>{errorApi ? 'При загрузке данных произошла ошибка' : ''}</span>;
}

export default ErrorApi;
