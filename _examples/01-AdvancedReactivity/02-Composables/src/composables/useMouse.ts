import { ref, onMounted, onUnmounted, MaybeRefOrGetter, toValue } from 'vue';

export function useMouse(el: MaybeRefOrGetter<HTMLDivElement>) {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    x.value = e.x - toValue(el).getBoundingClientRect().x;
    y.value = e.y - toValue(el).getBoundingClientRect().y;
  };

  onMounted(() => toValue(el).addEventListener('mousemove', update));
  onUnmounted(() => toValue(el).removeEventListener('mousemove', update));

  return { x, y };
}
