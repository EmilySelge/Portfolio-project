<template>
    

    <section class="flex flex-col lg:flex-row  md:items-start lg:items-center justify-between px-12 md:px-24 py-16 md:py-32 bg-gradient-to-r from-white to-pink-100">
    <div class="lg:w-1/2 space-y-6">
        <h1 class="text-4xl md:text-6xl stardom mb-4 italic w-full ">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600 ">Emily!</span></h1>
        <p class="">
            I'm a designer and developer with a passion for crafting seamless digital experiences. Whether it’s designing an intuitive website or writing clean, efficient code, I’m driven by the goal of making the web a little more beautiful and user-friendly—one pixel at a time.
        </p>
        <p class="">
            With a background in both creative design and technical development, I’m all about blending form and function to create websites and apps that not only look great but work flawlessly. I believe that great design has the power to improve people's lives, and I’m here to bring that vision to life.
        </p>
        <p class="">
            When I’m not busy designing or coding, you can usually find me exploring new tech trends, experimenting with design tools, or spending time with my dog, Smokey. 
        </p>
        <div class="pt-6 flex space-x-8 items-center">
            <a href="/cv_Emily_Selge.pdf"  download>
                <button class=" underline underline-offset-4">Download CV</button>
            </a>
            <RouterLink to="/contact" class=" inline-block bg-white border border-black px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 text-sm">Let's Collaborate!</RouterLink>
        </div>
    </div>
    
    <div class="lg:w-1/2 flex flex-col items-center justify-center mt-24">
    <!-- Card 1 -->
    <div class="flex justify-center -space-x-24">
        <div class="animate-float">
            <div class="bg-gradient-to-r from-pink-400 to-pink-500 bg-animate w-[9.15rem] h-2 skew-x-[60deg] translate-y-[0.10rem] translate-x-[0.20rem] -rotate-12 z-40"></div>
            <div class="bg-gradient-to-r from-pink-300 to-pink-500 bg-animate w-36 h-36 -skew-y-12 border border-pink-400 -z-10 translate-x-3 flex flex-col items-center">
            </div>
            <div class="bg-gradient-to-r from-pink-500 to-pink-700 bg-animate w-3 h-[9rem] -translate-y-[8.125rem] skew-y-[16deg] z-10"></div>
        </div>
   

    <!-- Card 2 -->
    <div class="mt-4 animate-float animation-delay-200">
        <div class="bg-gradient-to-r from-pink-400 to-pink-500 bg-animate w-[9.15rem] h-2 skew-x-[60deg] translate-y-[0.10rem] translate-x-[0.20rem] -rotate-12 z-40"></div>
        <div class="bg-gradient-to-r from-pink-300 to-pink-500 bg-animate w-36 h-36 -skew-y-12 border border-pink-400 -z-10 translate-x-3 flex flex-col items-center">
        </div>
        <div class="bg-gradient-to-r from-pink-500 to-pink-700 bg-animate w-3 h-[9rem] -translate-y-[8.125rem] skew-y-[16deg] z-10"></div>
    </div>

    <!-- Card 3 -->
    <div class="mt-8 animate-float animation-delay-400">
        <div class="bg-gradient-to-r from-pink-400 to-pink-500 bg-animate w-[9.15rem] h-2 skew-x-[60deg] translate-y-[0.10rem] translate-x-[0.20rem] -rotate-12 z-40"></div>
        <div class="bg-gradient-to-r from-pink-300 to-pink-500 bg-animate w-36 h-36 -skew-y-12 border border-pink-400 -z-10 translate-x-3 flex flex-col items-center">
        </div>
        <div class="bg-gradient-to-r from-pink-500 to-pink-700 bg-animate w-3 h-[9rem] -translate-y-[8.125rem] skew-y-[16deg] z-10"></div>
    </div>
</div>
</div>


</section>

   
    
</template>

<style>
    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }

    .animation-delay-200 {
        animation-delay: 0.2s;
    }

    .animation-delay-400 {
        animation-delay: 0.4s;
    }

    @keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-animate {
  background-size: 400% 400%;
  animation: gradientAnimation 5s ease infinite;
}
</style>

<script>
import { RouterLink } from 'vue-router';


</script>