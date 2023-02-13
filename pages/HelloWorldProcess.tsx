import dynamic from 'next/dynamic';

import type { Process } from './contextFactory/process';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HelloWorldProcess: Process = {
  // eslint-disable-next-line import/extensions
  Component: dynamic(() => import('./HelloWorld')),
  hasWindow: true,
  icon: '../public/favicon.ico',
  title: 'Hello World'
};

export default HelloWorldProcess;
