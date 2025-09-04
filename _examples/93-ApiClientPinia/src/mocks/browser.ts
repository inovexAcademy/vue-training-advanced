import { setupWorker } from 'msw/browser';
import { dogs } from './handlers';

export const worker = setupWorker(...dogs);
