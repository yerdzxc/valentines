<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards } from 'swiper/modules';

const modules = [EffectCards];


</script>

<template>
  <div class="tw-bg-red-400 tw-py-52">
    <div class="tw-p-10 lg:tw-p-20">
      <p class="tw-text-center tw-font-serif tw-font-semibold tw-text-xl">
        Welcome My <span>
          <NuxtLink to="/eto">
            Love.
          </NuxtLink>
        </span>
        <span>
          Erlyn Joyce Francisco Ramos
        </span>
      </p>
    </div>
    <div class="tw-flex tw-justify-center tw-items-center">
      <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
        <swiper-slide>HELLO BABY KO!!!!</swiper-slide>

        <swiper-slide><img src="/img/hi.jpg" /></swiper-slide>
        <swiper-slide class="tw-text-center">Hindi ko man afford yung tulips na flower ngayon. Pwede bang lipstulips nalng
          muna? AHEHAEHEHAHEAHEH</swiper-slide>
        <swiper-slide><img src="/img/cutie.jpg" /></swiper-slide>
        <swiper-slide><img src="/img/heart.jpg" /></swiper-slide>
        <swiper-slide><img src="/img/heart1.jpg" /></swiper-slide>
        <swiper-slide>
          <div class="tw-text-center tw-p-6"> HEHEHEHEHEHEHE I LOVE YOU SO MUCH BABY!!!
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="tw-text-center tw-p-6"> PINDOT MO YUNG LOVE NA WORD SA TAAS HEHEHE!!!
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>



<style scoped>
.swiper {
  width: 240px;
  height: 240px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>