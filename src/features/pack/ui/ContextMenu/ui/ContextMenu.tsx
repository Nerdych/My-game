import {Button} from '@shared/ui-kit/Button';
import {CrossIcon, PlusIcon} from '@shared/ui-kit/Icons';
import cn from 'classnames';
import {useLocalStorage} from '@shared/lib/hooks/useLocalStorage';
import {useContextMenu} from '../hooks/useContextMenu';
import styles from '../styles/ContextMenu.module.scss';

const ContextMenu = () => {
  const {ref} = useContextMenu();
  // const dispatch = useDispatch();
  const {setValue} = useLocalStorage();

  const specificButtons = [
    {
      name: 'add',
      variant: 'positive',
      icon: <PlusIcon />,
      onClick: () => {
        setValue('store', 'redux');
      },
    },
    {
      name: 'delete',
      variant: 'negative',
      icon: <CrossIcon />,
      onClick: () => {
        setValue('store', 'mobx');
      },
    },
  ];

  return (
    <div ref={ref} className={styles.root}>
      <ul className={styles.list}>
        {specificButtons.map((button) => (
          <li key={button.name}>
            <Button className={cn(styles.button, button.variant === 'positive' ? styles.positiveButton : styles.negativeButton)} variant="clear" onClick={button.onClick}>
              {button.icon}
            </Button>
          </li>
        ))}
      </ul>

      <ul className={styles.list}>
        {specificButtons.map((button) => (
          <li key={button.name}>
            <Button className={cn(styles.button, button.variant === 'positive' ? styles.positiveButton : styles.negativeButton)} variant="clear">
              {button.icon}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {ContextMenu};
