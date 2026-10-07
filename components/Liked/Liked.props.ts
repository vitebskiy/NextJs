import { ButtonHTMLAttributes } from 'react';

export interface LikedProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLiked?: boolean;
}
