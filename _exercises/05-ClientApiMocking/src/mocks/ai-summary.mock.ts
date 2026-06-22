export type AiSummary = {
  id: string;
  summary: string;
  avgRating: number;
};

export const getAiSummaryMockById = (id: string): AiSummary => {
  return AI_SUMMARY_MOCKS.find((summary) => summary.id === id)!;
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
  {
    id: '11',
    summary: 'Users appreciate the product quality and reliability',
    avgRating: 4.4,
  },
  {
    id: '12',
    summary: 'The product delivers good value for its price',
    avgRating: 4.1,
  },
  {
    id: '13',
    summary: 'Many users mention the smooth onboarding experience',
    avgRating: 4.5,
  },
  {
    id: '14',
    summary: 'The product works well but needs better documentation',
    avgRating: 3.7,
  },
  {
    id: '15',
    summary: 'Users report stable performance in daily usage',
    avgRating: 4.2,
  },
  {
    id: '16',
    summary: 'The product is useful, though setup can be confusing',
    avgRating: 3.4,
  },
  {
    id: '17',
    summary: 'Customers are impressed by the fast response times',
    avgRating: 4.6,
  },
  {
    id: '18',
    summary: 'Users find the interface clean and easy to navigate',
    avgRating: 4.3,
  },
  {
    id: '19',
    summary: 'The product meets expectations for most users',
    avgRating: 4.0,
  },
  {
    id: '20',
    summary: 'Some users are frustrated by occasional bugs',
    avgRating: 2.8,
  },
  {
    id: '21',
    summary: 'Users praise the feature set and flexibility',
    avgRating: 4.5,
  },
  {
    id: '22',
    summary: 'The product is dependable for long-term workflows',
    avgRating: 4.4,
  },
  {
    id: '23',
    summary: 'Feedback highlights excellent customer support',
    avgRating: 4.7,
  },
  {
    id: '24',
    summary: 'Users think the product is average overall',
    avgRating: 3.2,
  },
  {
    id: '25',
    summary: 'The product solves key problems effectively',
    avgRating: 4.6,
  },
  {
    id: '26',
    summary: 'Users report a few missing features they would like',
    avgRating: 3.6,
  },
  {
    id: '27',
    summary: 'The product is highly recommended by frequent users',
    avgRating: 4.8,
  },
  {
    id: '28',
    summary: 'Users are mostly satisfied but want better integrations',
    avgRating: 3.9,
  },
  {
    id: '29',
    summary: 'The product offers consistent quality across updates',
    avgRating: 4.3,
  },
  {
    id: '30',
    summary: 'Some users find the learning curve too steep',
    avgRating: 2.9,
  },
  {
    id: '31',
    summary: 'Users like the modern design and clear layout',
    avgRating: 4.4,
  },
  {
    id: '32',
    summary: 'The product is adequate but not outstanding',
    avgRating: 3.3,
  },
  {
    id: '33',
    summary: 'Many users say the product saves them time',
    avgRating: 4.7,
  },
  {
    id: '34',
    summary: 'Users are concerned about occasional slowdowns',
    avgRating: 3.1,
  },
  {
    id: '35',
    summary: 'The product receives strong ratings from teams',
    avgRating: 4.5,
  },
  {
    id: '36',
    summary: 'Users find the product reliable and efficient',
    avgRating: 4.2,
  },
  {
    id: '37',
    summary: 'The product needs polish in a few areas',
    avgRating: 3.5,
  },
  {
    id: '38',
    summary: 'Users are delighted with recent improvements',
    avgRating: 4.8,
  },
  {
    id: '39',
    summary: 'The product performs well under heavy usage',
    avgRating: 4.6,
  },
  {
    id: '40',
    summary: 'Users give mixed feedback on advanced settings',
    avgRating: 3.4,
  },
  {
    id: '41',
    summary: 'The product is trusted by many returning users',
    avgRating: 4.5,
  },
  {
    id: '42',
    summary: 'Users mention that setup was quicker than expected',
    avgRating: 4.1,
  },
  {
    id: '43',
    summary: 'The product has potential but needs refinements',
    avgRating: 3.0,
  },
  {
    id: '44',
    summary: 'Users appreciate the frequent and useful updates',
    avgRating: 4.7,
  },
  {
    id: '45',
    summary: 'The product meets business needs effectively',
    avgRating: 4.3,
  },
  {
    id: '46',
    summary: 'Users report that support documentation is improving',
    avgRating: 4.0,
  },
  {
    id: '47',
    summary: 'The product can be inconsistent in edge cases',
    avgRating: 3.2,
  },
  {
    id: '48',
    summary: 'Users love the product for collaborative work',
    avgRating: 4.8,
  },
  {
    id: '49',
    summary: 'The product receives above-average user sentiment',
    avgRating: 4.2,
  },
  {
    id: '50',
    summary: 'Users see strong overall value in the product',
    avgRating: 4.4,
  },
];
