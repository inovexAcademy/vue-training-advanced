import { getAllDogs } from '@/api';
import { beforeEach, test, vi } from 'vitest';

vi.mock('@/api'); // mock all exports of "@/api"

beforeEach(() => {
  // see https://vitest.dev/api/vi.html#vi-resetallmocks
  vi.resetAllMocks();
});

test('your test name', async () => {
  vi.mocked(getAllDogs, { partial: true }).mockResolvedValue({
    data: [{ id: '1', name: 'Corgi', awesomeness: 10 }],
  });

  // mount your component and put your remaining test logic...
});
