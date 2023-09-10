import ReactDOM from 'react-dom';
import { helper } from './helpers';
import styles from './styles.module.scss';
import { lazy, useState } from 'react';
// import Button from './Buttons'

const Button = lazy(() => import('./Buttons'));

const App: React.FC = () => {
  helper();
  helper();
  const [state, setState] = useState(false);

  return (
    <div>
      <h1>Hello, React and TypeScript!</h1>
      <button className={styles.kukusha} onClick={() => setState(true)}>
        fas
      </button>

      {state && <Button />}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
