import { http, HttpResponse } from 'msw';
import { getAiSummaryMockById } from './ai-summary.mock';

export const aiSummary = [
  http.get<{ id: string }>('/api/ai/reviews/:id/summary', ({ params }) => {
    return HttpResponse.json(getAiSummaryMockById(params.id));
  }),
];
