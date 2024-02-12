<template>
    <div class="tw-relative tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-gray-100">
      <div class="tw-p-12">
          <div class="tw-p-6 tw-flex tw-content-center tw-justify-center">
             <p class="tw-text-center tw-font-semibold tw-text-6xl">
              WILL YOU BE MY VALENTINES?
             </p> 
          </div>
          <div class="tw-flex tw-content-center tw-justify-center">
              <img src="/img/flowers.jpg" />
          </div>
          <div class="tw-m-2 tw-flex tw-content-center tw-justify-center">
              <div>
                  <div
                      class="tw-p-12 tw-flex tw-content-center tw-justify-center tw-rounded-xl tw-border-4 tw-border-green-500 tw-bg-green-500">
                      <NuxtLink to="/yes">
                          <p class="tw-text-6xl"> YES!!</p>
                      </NuxtLink>
                  </div>
              </div>
              <div
                  class="tw-p-12 tw-flex tw-content-center tw-justify-center">
                  <NuxtLink to="/no">
                      <p class="tw-text-xs"> no!!</p>
                  </NuxtLink>
              </div>
          </div>
      </div>
      <template v-for="index in numberOfHearts" :key="index">
        <div :class="['heart', `heart-${index}`]" />
      </template>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const numberOfHearts = 10;
  
  onMounted(() => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
  
    for (let i = 1; i <= numberOfHearts; i++) {
      const heart = document.querySelector(`.heart-${i}`);
      heart.style.left = `${Math.random() * containerWidth}px`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
      heart.style.animationDelay = `${Math.random() * 2}s`; // Randomize animation delay
      heart.style.top = `-${Math.random() * containerHeight}px`;
    }
  });
  </script>
  
  <style scoped>
  .heart {
    width: 50px;
    height: 50px;
    position: absolute;
    background: url('https://emojicdn.elk.sh/❤️');
    background-size: cover;
    animation: fall 3s ease-in-out infinite;
  }
  
  @keyframes fall {
    0% {
      transform: translateY(-100vh) rotate(0deg);
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
    }
  }
  </style>
  