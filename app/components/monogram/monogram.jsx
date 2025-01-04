import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="48"
      height="29"
      viewBox=" 0 0 236 289"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
        <rect width="187.624" height="134.418" x=".5" y="154.581" rx="3"/>
    <path d="M235.73 221.791c-1.922 37.756-24.015 63.899-56.007 67.209v-67.209h56.007Zm-56.007-67.21c31.463 2.307 53.249 28.82 56.007 67.21h-56.007v-67.21Z"/>
    <rect width="187.626" height="134.418" x=".5" rx="3"/>
    <path d="M235.732 67.21c-1.922 37.755-24.016 63.898-56.007 67.208V67.21h56.007ZM179.725 0c31.463 2.307 53.249 28.82 56.007 67.21h-56.007V0Z"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
