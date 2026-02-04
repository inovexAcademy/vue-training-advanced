import { http, HttpResponse } from 'msw';
import { DOGS_MOCK } from './dogs.mock';

export const dogs = [
  http.get('/api/dogs', () => {
    return HttpResponse.json(DOGS_MOCK);
  }),
];
