<template>
    <div class="container">
      <div class="tw-valentines" @mouseenter="animateCard(true)" @mouseleave="animateCard(false)">
        <div class="tw-envelope"></div>
        <div class="tw-front"></div>
        <div class="tw-card" ref="card">
          <div class="tw-text">Happy<br>Valentine's<br>Day! Erlyn ko!!</div>
          <div class="tw-heart"></div>
        </div>
        <div class="tw-hearts">
          <div class="tw-one"></div>
          <div class="tw-two"></div>
          <div class="tw-three"></div>
          <div class="tw-four"></div>
          <div class="tw-five"></div>
        </div>
      </div>
      <div class="tw-shadow"></div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      this.cardElement = this.$refs.card;
    },
    methods: {
      animateCard(enter) {
        if (enter) {
          this.cardElement.classList.add('tw-animate-up');
        } else {
          this.cardElement.classList.remove('tw-animate-up');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Tailwind CSS styles */
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fae1dd;
  }
  
  .tw-valentines {
    position: relative;
    top: 50px;
    cursor: pointer;
    animation: tw-up 3s linear infinite;
  }
  
  /*envelope*/
  .tw-envelope {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f08080; 
  }
  
  .tw-envelope:before {
    background-color: #f08080; 
    content: "";
    position: absolute;
    width: 212px;
    height: 212px;
    transform: rotate(45deg);
    top: -105px;
    left: 44px;
    border-radius: 30px 0 0 0;
  }
  
  .tw-card {
    position: absolute;
    background-color: #eae2b7;
    width: 270px;
    height: 170px;
    top: 5px;
    left: 15px;
    box-shadow: -5px -5px 100px rgba(0, 0, 0, 0.4); 
  }
  
  .tw-card:before {
    content: "";
    position: absolute;
    border: 3px solid #003049;
    border-style: dotted;
    width: 240px;
    height: 140px;
    left: 12px;
    top: 12px;
  }
  
  .tw-text {
    position: absolute;
    font-family: 'Brush Script MT', cursive;
    font-size: 18px;
    text-align: center;
    line-height: 25px;
    top: 19px;
    left: 85px;
    color: #003049;
  }
  
  .tw-heart {
    background-color: #d62828;
    display: inline-block;
    height: 30px;
    margin: 0 10px;
    position: relative;
    top: 110px;
    left: 105px;
    transform: rotate(-45deg);
    width: 30px;
  }
  
  .tw-heart:before,
  .tw-heart:after {
    content: "";
    background-color: #d62828;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }
  
  .tw-heart:before {
    top: -15px;
    left: 0;
  }
  
  .tw-heart:after {
    left: 15px;
    top: 0;
  }
  
  .tw-front {
    position: absolute;
    border-right: 180px solid #f4978e;
    border-top: 95px solid transparent;
    border-bottom: 100px solid transparent;
    left: 120px;
    top: 5px;
    width: 0;
    height: 0;
    z-index: 10;
  }
  
  .tw-front:before {
    position: absolute;
    content: "";
    border-left: 300px solid #f8ad9d;
    border-top: 195px solid transparent;
    left: -120px;
    top: -95px;
    width: 0;
    height: 0;
  }
  
  /*shadow*/
  .tw-shadow {
    position: absolute;
    width: 330px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    top: 265px;
    left: -15px;
    animation: tw-scale 3s linear infinite;
    z-index: -1;
  }
  
  /*To move the envelope up and down*/
  @keyframes tw-up {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
  }
  
  /*To scale the shadow*/
  @keyframes tw-scale {
    0%, 100% {
      transform: scaleX(1);
    }
    50% {
      transform: scaleX(0.85);
    }
  }
  
  /*Add some hearts to the envelope*/
  .tw-hearts {
    position: absolute;
  }
  
  .tw-one,
  .tw-two,
  .tw-three,
  .tw-four,
  .tw-five {
    background-color: red;
    display: inline-block;
    height: 10px;
    margin: 0 10px;
    position: relative;
    transform: rotate(-45deg);
    width: 10px;
    top: 50px;
  }
  
  .tw-one:before,
  .tw-one:after,
  .tw-two:before,
  .tw-two:after,
  .tw-three:before,
  .tw-three:after,
  .tw-four:before,
  .tw-four:after,
  .tw-five:before,
  .tw-five:after {
    content: "";
    background-color: red;
    border-radius: 50%;
    height: 10px;
    position: absolute;
    width: 10px;
  }
  
  .tw-one:before,
  .tw-two:before,
  .tw-three:before,
  .tw-four:before,
  .tw-five:before {
    top: -5px;
    left: 0;
  }
  
  .tw-one:after,
  .tw-two:after,
  .tw-three:after,
  .tw-four:after,
  .tw-five:after {
    left: 5px;
    top: 0;
  }
  
  .tw-one {
    left: 10px;
    animation: tw-heart 1s ease-out infinite; 
  }
  
  .tw-two {
    left: 30px;
    animation: tw-heart 2s ease-out infinite; 
  }
  
  .tw-three {
    left: 50px;
    animation: tw-heart 1.5s ease-out infinite;
  }
  
  .tw-four {
    left: 70px;
    animation: tw-heart 2.3s ease-out infinite;
  }
  
  .tw-five {
    left: 90px;
    animation: tw-heart 1.7s ease-out infinite;
  }
  
  @keyframes tw-heart {
    0% {
      transform: translateY(0) rotate(-45deg) scale(0.3);
      opacity: 1;
    }
    100% {
      transform: translateY(-150px) rotate(-45deg) scale(1.3);
      opacity: 0.5;
    }
  }
  
  /* Animation */
  .tw-animate-up {
    top: -90px !important;
  }
  </style>
  