import cn from 'classnames';
import styles from '../styles/Details.module.scss';
import type {DetailsProps} from '../types';

export const Details = (props: DetailsProps) => {
  const {children, header, className, summaryClassName, contentClassName, ...detailsProps} = props;

  return (
    <details className={cn(styles.root, className)} {...detailsProps}>
      <summary className={cn(styles.summary, summaryClassName)}>{header}</summary>
      <div className={cn(styles.content, contentClassName)}>{children}</div>
    </details>
  );
};
