import styles from './DivPage.module.css';

interface DivPageProps {
  children: React.ReactNode;
}

function DivPage({ children }: DivPageProps) {
  return <div className={styles.page}>{children}</div>;
}

export default DivPage;
