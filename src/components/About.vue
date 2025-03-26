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
    
   <div class="lg:w-1/2 flex flex-col items-center justify-center mt-24 relative h-[500px]">
    <section class="stars-container">
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
        <div class="five-pointed-star"></div>
    </section>
</div>


</section>

   
    
</template>

<style>
.five-pointed-star {
    --star-color: rgb(255, 0, 102);
    --darker-star-color: rgb(204, 0, 82);
    position: absolute;
    top: -50px;
    left: calc(10% + 80% * var(--random-pos));
    font-size: 1em;
    width: 0;
    height: 0;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid var(--star-color);
    border-left: 1em solid transparent;
    transform: rotate(35deg);
    animation: fall-flip ease-in infinite;
    animation-duration: calc(5s + 5s * var(--random-speed));
    animation-delay: calc(1s * var(--random-delay));
    filter: drop-shadow(0 0 2px rgba(255, 0, 102, 0.7));
    will-change: transform, opacity;
}

.five-pointed-star:before {
    content: "";
    position: absolute;
    border-bottom: 0.8em solid var(--darker-star-color);
    border-left: 0.3em solid transparent;
    border-right: 0.3em solid transparent;
    top: -0.45em;
    left: -0.65em;
    transform: rotate(-35deg);
}

.five-pointed-star:after {
    content: "";
    position: absolute;
    top: 0.03em;
    left: -1.05em;
    width: 0;
    height: 0;
    border-right: 1em solid transparent;
    border-bottom: 0.7em solid var(--darker-star-color);
    border-left: 1em solid transparent;
    transform: rotate(-70deg);
}

@keyframes fall-flip {
    0% {
        transform: translateY(0) rotate(0deg) rotateX(0deg) scale(0.8);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    70% {
        opacity: 0.9;
    }
    100% {
        transform: translateY(100vh) rotate(360deg) rotateX(180deg) scale(0.4);
        opacity: 0;
    }
}

/* More varied timing and positions */
.five-pointed-star:nth-child(1) { --random-pos: 0.1; --random-speed: 0.1; --random-delay: 0; }
.five-pointed-star:nth-child(2) { --random-pos: 0.25; --random-speed: 0.3; --random-delay: 0.8; }
.five-pointed-star:nth-child(3) { --random-pos: 0.4; --random-speed: 0.5; --random-delay: 1.6; }
.five-pointed-star:nth-child(4) { --random-pos: 0.55; --random-speed: 0.2; --random-delay: 2.4; }
.five-pointed-star:nth-child(5) { --random-pos: 0.7; --random-speed: 0.4; --random-delay: 3.2; }
.five-pointed-star:nth-child(6) { --random-pos: 0.85; --random-speed: 0.6; --random-delay: 4.0; }
.five-pointed-star:nth-child(7) { --random-pos: 0.15; --random-speed: 0.7; --random-delay: 0.4; }
.five-pointed-star:nth-child(8) { --random-pos: 0.3; --random-speed: 0.9; --random-delay: 1.2; }
.five-pointed-star:nth-child(9) { --random-pos: 0.45; --random-speed: 0.8; --random-delay: 2.0; }
.five-pointed-star:nth-child(10) { --random-pos: 0.6; --random-speed: 0.35; --random-delay: 2.8; }
.five-pointed-star:nth-child(11) { --random-pos: 0.75; --random-speed: 0.55; --random-delay: 3.6; }
.five-pointed-star:nth-child(12) { --random-pos: 0.9; --random-speed: 0.65; --random-delay: 4.4; }
</style>

<script>
import { RouterLink } from 'vue-router';


</script>