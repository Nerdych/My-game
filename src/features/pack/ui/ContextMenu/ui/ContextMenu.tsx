import {Button} from '@shared/ui-kit/Button';
import {CrossIcon, PlusIcon} from '@shared/ui-kit/Icons';
import cn from 'classnames';
import {useDispatch} from 'react-redux';
import {addRound} from '@entities/round/slice/roundSlice';
import {addRoundId} from '@entities/pack/store/slice';
import {useLocalStorage} from '@shared/lib/hooks/useLocalStorage';
import {useContextMenu} from '../hooks/useContextMenu';
import styles from '../styles/ContextMenu.module.scss';

const ContextMenu = () => {
  const {ref} = useContextMenu();
  const dispatch = useDispatch();
  const {setValue, localStorageValue} = useLocalStorage();

  const specificButtons = [
    {
      name: 'add',
      variant: 'positive',
      icon: <PlusIcon />,
      onClick: () => {
        // dispatch(addRound());
        // dispatch(addRoundId(length));
        setValue('popa', 'jopa');
      },
    },
    {
      name: 'delete',
      variant: 'negative',
      icon: <CrossIcon />,
      onClick: () => {
        setValue('popa', 'kaka');
      },
    },
  ];

  console.log('test - // LocalStorageValue', localStorageValue);

  return (
    <div ref={ref} className={styles.root}>
      <ul className={styles.list}>
        {specificButtons.map((button) => (
          <li key={button.name}>
            <Button
              className={cn(
                styles.button,
                button.variant === 'positive' ? styles.positiveButton : styles.negativeButton,
              )}
              variant="clear"
              onClick={button.onClick}
            >
              {button.icon}
            </Button>
          </li>
        ))}
      </ul>

      <ul className={styles.list}>
        {specificButtons.map((button) => (
          <li key={button.name}>
            <Button
              className={cn(
                styles.button,
                button.variant === 'positive' ? styles.positiveButton : styles.negativeButton,
              )}
              variant="clear"
            >
              {button.icon}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {ContextMenu};
