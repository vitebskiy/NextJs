import Image from 'next/image';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Image
        src="/logo.png"
        alt="Логотип my_blog"
        width={120}
        height={40}
        priority
      />
      <a href="#!">
        <Image src="/icon-github.svg" alt="GitHub" width={24} height={24} />
      </a>
    </header>
  );
};
