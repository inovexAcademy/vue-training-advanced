import { setupWorker } from 'msw/browser';
import { aiSummary } from './handlers';

export const worker = setupWorker(...aiSummary);
