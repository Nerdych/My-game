import {App} from '@app/App';
import {createRoot} from 'react-dom/client';

const rootNode = document.getElementById('root');

if (!rootNode) {
  throw new Error('Root node not found!');
}

const root = createRoot(rootNode);
root.render(<App />);
