import { AiSummary } from '@/mocks/ai-summary.mock';
import { defineStore } from 'pinia';

export const useAiStore = defineStore('ai', () => {
  const getAiSummaryById = async (
    id: number,
  ): Promise<{ summary?: AiSummary }> => {
    // 👉 make the fetch request here
    // const response = ...
    // const data = await response.json();
    // return { summary: data as AiSummary };
  };

  return {
    getAiSummaryById,
  };
});
