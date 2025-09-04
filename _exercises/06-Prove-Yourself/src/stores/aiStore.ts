import { AiSummary } from '@/mocks/ai-summary.mock';
import { defineStore } from 'pinia';

export const useAiStore = defineStore('ai', () => {
  const getAiSummaryById = async (
    id: number,
  ): Promise<{ summary?: AiSummary; error?: string }> => {
    try {
      const response = await fetch(`/api/ai/reviews/${id}/summary`);
      const data = await response.json();

      return { summary: data as AiSummary };
    } catch (err) {
      const error = err.message;
      return { error };
    }
  };

  return {
    getAiSummaryById,
  };
});
