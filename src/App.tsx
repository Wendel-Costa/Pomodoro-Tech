import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        oi
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        placeat sed autem aspernatur itaque odio laboriosam fugit cumque
        molestias enim fugiat sapiente reiciendis, vero cupiditate magni in
        pariatur hic nihil!
      </p>
    </>
  );
}
