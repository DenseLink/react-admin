import dynamic from 'next/dynamic';

import type { Processes } from './contextFactory/process';

const processDirectory: Processes = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld')),
    hasWindow: true,
    icon: './favicon.ico',
    title: 'Hello World'
  }
};

export default processDirectory;
