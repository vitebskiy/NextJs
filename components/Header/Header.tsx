import cn from 'classnames';
import Image from 'next/image';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';

export const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn(styles['header'], className)} {...props}>
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
