import {RemixBrowser} from '@remix-run/react';
import {startTransition, StrictMode} from 'react';
import {hydrateRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      
      <RemixBrowser />
    </StrictMode>,
  );
});
