<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
const count = ref(0);
let interval: NodeJS.Timeout;

onMounted(() => {
  console.debug('🔥 mounted');
  interval = setInterval(() => {
    count.value++;
    console.log('interval', interval + ' ' + count.value);
  }, 1000);
});
onUnmounted(() => {
  console.debug('🔥 unmounted');
  // clearInterval(interval);
});
</script>
