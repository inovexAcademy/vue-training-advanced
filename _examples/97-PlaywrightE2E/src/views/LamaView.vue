<template>
  <RouterLink class="back-link" to="/">{{ '<' }} Home</RouterLink>
  <section class="lama-chat">
    <h1>Chat with {{ lama?.name }}</h1>
    <img
      class="lama-avatar"
      :src="`/lamas/lama-${lamaId}.jpeg`"
      :alt="lama?.name"
    />
    <p>{{ lama?.description }}</p>

    <div class="chat-container">
      <div class="chat-messages">
        <div
          v-for="message in chatMessages"
          :key="message.id"
          class="message"
          :class="{
            'user-message': message.isUser,
            'lama-message': !message.isUser,
          }"
        >
          <div class="message-content">
            {{ message.text }}
          </div>
        </div>
      </div>
    </div>

    <div class="chat-input-container">
      <input
        v-model="currentMessage"
        type="text"
        placeholder="Type a message..."
        class="chat-input"
        @keydown.enter="sendMessage"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { lamaData } from '../lama-data';
import { onBeforeMount, ref, nextTick } from 'vue';

const route = useRoute();
const lamaId = Number(route.params.id);
const lama = lamaData.find(l => l.id === lamaId);

const chatMessages = ref<Array<{ id: number; text: string; isUser: boolean }>>(
  [],
);
const currentMessage = ref('');
let messageIdCounter = 0;

const sendMessage = async () => {
  if (currentMessage.value.trim() === '') return;

  chatMessages.value.push({
    id: messageIdCounter++,
    text: currentMessage.value,
    isUser: true,
  });

  currentMessage.value = '';

  await nextTick();
  scrollToBottom();

  setTimeout(() => {
    chatMessages.value.push({
      id: messageIdCounter++,
      text: lama?.message || 'baah',
      isUser: false,
    });

    nextTick(() => scrollToBottom());
  }, Math.random() * 1000);
};

const scrollToBottom = () => {
  const chatContainer = document.querySelector('.chat-messages');
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
};

onBeforeMount(() => {
  if (!lama) {
    alert('Lama not found! Redirecting to home.');
    window.location.href = '/';
  }
});
</script>

<style scoped>
.back-link {
  display: inline-block;
  margin-top: 1em;
  text-decoration: none;
  color: #42b983;
  transition: all 0.3s ease;
  position: absolute;
  left: 2em;
  top: 2em;
}

.back-link:hover {
  color: #369e7a;
  transform: scale(1.05);
}

.lama-chat {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.lama-avatar {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 1em;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.chat-container {
  margin-top: 2em;
  width: 100%;
  height: 35vh;
  overflow: hidden;
  padding-bottom: 10px;
}

.chat-messages {
  height: 100%;
  overflow-y: auto;
  padding: 1em;
  background-color: #f9f9f9;
}

.message {
  margin-bottom: 1em;
  display: flex;
}

.user-message {
  justify-content: flex-end;
}

.lama-message {
  justify-content: flex-start;
}

.message-content {
  max-width: 70%;
  padding: 0.8em 1em;
  border-radius: 18px;
  word-wrap: break-word;
}

.user-message .message-content {
  background-color: #42b983;
  color: white;
}

.lama-message .message-content {
  background-color: #e5e5ea;
  color: #333;
}

.chat-input-container {
  width: 100%;
  padding: 1em;
  margin-top: 4vh;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 64px;
  box-sizing: border-box;
}

.chat-input {
  width: 100%;
  padding: 0.8em 1em;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.chat-input:focus {
  border-color: #42b983;
}
</style>
