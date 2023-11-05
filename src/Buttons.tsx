import Svg from '../public/circle-heat-svgrepo-com.svg';

import styles from './index.module.scss';

const Button = () => {
  return (
    <button type="button" className={styles.a}>
      {__IS_DEV__ ? 'HAHA NETU!!!' : <Svg />}
    </button>
  );
};

export default Button;
