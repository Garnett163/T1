import { useState } from 'react';
import styles from './FaqCard.module.css';
import Button from '@shared/ui/button/Button';

interface FaqCardProps {
  title: string;
  answer: string;
}

function FaqCard({ title, answer }: FaqCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <li className={styles.faqCard}>
      <div className={styles.containerFlex}>
        <h3 className={styles.title}>{title}</h3>
        <Button
          classSecondary={`${isExpanded ? styles.buttonToggleMinus : styles.buttonTogglePlus}`}
          handleClick={toggleExpansion}
          ariaLabel="Кнопка переключения раскрытия вопроса"
        ></Button>
      </div>
      <p className={`${styles.answer} ${isExpanded ? styles.expanded : ''}`}>{answer}</p>
    </li>
  );
}

export default FaqCard;
