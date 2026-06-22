import { vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

/** Global mock for ResizeObserver which is not available in the vitest/jsdom environment */
globalThis.ResizeObserver = vi.fn().mockReturnValue(mock<typeof globalThis.ResizeObserver>());
