// eslint-disable-next-line import/extensions
import contextFactory from '../contextFactory';
// eslint-disable-next-line import/extensions
import { initialProcessContextState } from './initialContextStates';
import type { ProcessContextState } from './useProcessContextState';
// eslint-disable-next-line import/extensions
import useProcessContextState from './useProcessContextState';

const { Consumer, Provider } = contextFactory<ProcessContextState>(
  initialProcessContextState,
  useProcessContextState
);

export { Consumer as ProcessConsumer, Provider as ProcessProvider };
