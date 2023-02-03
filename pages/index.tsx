import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';



const processDirectory = {
  HelloWorld: {
    // eslint-disable-next-line import/extensions
    Component: dynamic(() => import('./HelloWorld'))
  }
};



export default function Home(): ReactElement {
  const HelloWorldComponent = processDirectory.HelloWorld.Component;
  return <HelloWorldComponent />;
}
