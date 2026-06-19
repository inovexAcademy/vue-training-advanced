import { onMounted, onUnmounted, ref, toValue } from 'vue';
import type { MaybeRefOrGetter } from 'vue';

export function useMouse(el: MaybeRefOrGetter<HTMLDivElement | null>) {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    const element = toValue(el);
    if (!element) return;

    x.value = e.x - element.getBoundingClientRect().x;
    y.value = e.y - element.getBoundingClientRect().y;
  };

  onMounted(() => toValue(el)?.addEventListener('mousemove', update));
  onUnmounted(() => toValue(el)?.removeEventListener('mousemove', update));

  return { x, y };
}
