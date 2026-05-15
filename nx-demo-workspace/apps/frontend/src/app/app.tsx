// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { UserProfile } from '@nx-demo-workspace/shared-models';
const user: UserProfile = { id: '1', name: 'Alex', role: 'admin' };

export function App() {
  return (
    <div>
      <NxWelcome title="frontend" />
    </div>
  );
}

export default App;
