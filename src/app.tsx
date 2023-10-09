import { type Component, ErrorBoundary } from 'solid-js';
import { Routes } from './routes';

const App: Component = () => {
  return (
    <ErrorBoundary fallback={<div>저런!! 😳</div>}>
      <Routes />
    </ErrorBoundary>
  );
};

export default App;
