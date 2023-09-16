import ReactDOM from 'react-dom';
import { helper } from './helpers';
import { Suspense, lazy, useState } from 'react';
import styles from './styles.module.scss';
import { createRoot } from 'react-dom/client';

const Button = lazy(() => import('./Buttons'));

const App: React.FC = () => {
  helper();
  helper();
  const [state, setState] = useState(false);

  return (
    <div>
      <h1>Hello, React and TypeScript!</h1>
      <button
        className={styles.kukusha}
        onClick={() => {
          throw Error('wtf');
        }}
      >
        fasss
      </button>

      {state && (
        <Suspense>
          <Button />
        </Suspense>
      )}
    </div>
  );
};

const rootNode = document.getElementById('root');
const root = createRoot(rootNode!);
root.render(<App />);
