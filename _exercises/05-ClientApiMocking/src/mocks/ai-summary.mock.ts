export type AiSummary = {
  id: string;
  summary: string;
  avgRating: number;
};

export const getAiSummaryMockById = (id: string): AiSummary => {
  return AI_SUMMARY_MOCKS.find(summary => summary.id === id)!;
};

export const AI_SUMMARY_MOCKS: AiSummary[] = [
  {
    id: '1',
    summary: 'The users find the product pretty decent on average',
    avgRating: 4,
  },
  {
    id: '2',
    summary: 'The product has received mixed reviews from users',
    avgRating: 3.5,
  },
  {
    id: '3',
    summary: 'Users love the product, but it has some minor issues',
    avgRating: 4.2,
  },
  {
    id: '4',
    summary: 'Overall, users are satisfied with the product',
    avgRating: 4.0,
  },
  {
    id: '5',
    summary: 'The product has received positive feedback from users',
    avgRating: 4.3,
  },
  { id: '6', summary: 'Users are not happy with the product', avgRating: 2.0 },
  {
    id: '7',
    summary: 'The product is okay, but could be improved',
    avgRating: 3.0,
  },
  {
    id: '8',
    summary: 'Users are very satisfied with the product',
    avgRating: 4.8,
  },
  {
    id: '9',
    summary: 'The product is a game changer for many users',
    avgRating: 4.9,
  },
  {
    id: '10',
    summary: 'The product has received a lot of attention from users',
    avgRating: 4.7,
  },
];
