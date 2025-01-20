<template>
    

    <section class="flex space-y-12 flex-col lg:flex-row  md:items-start lg:items-center justify-between px-12 md:px-24 py-16 md:py-32 bg-gradient-to-r from-white to-pink-100">
    <div class="lg:w-2/3 space-y-6">
        <h1 class="text-4xl md:text-6xl stardom mb-4 italic w-full">
            Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">Emily!</span></h1>
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
            <a href="/public/cv_Emily_Selge.pdf"  download>
                <button class=" underline underline-offset-4">Download CV</button>
            </a>
            <RouterLink to="/contact" class=" inline-block bg-white border border-black px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 text-sm">Let's Collaborate!</RouterLink>
        </div>
    </div>
</section>

   
    
</template>

<script>
import { RouterLink } from 'vue-router';


</script>