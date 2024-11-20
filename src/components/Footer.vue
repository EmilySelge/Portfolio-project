<template>
    <section class="bg-fuchsia-50 px-16 pt-12 lg:px-32 lg:pt-24 pb-8 lg:pb-12">
        <div class="flex flex-col md:flex-row md:space-x-20  justify-between border-b pb-12 border-fuchsia-800">
            <div class="flex justify-between lg:w-1/4 md:w-1/3">
                <ul class="space-y-2">
                    <li class="italic mb-4" style="font-family: 'Stardom', sans-serif;">Emily S.</li>
                    <li> <a href="https://www.facebook.com/profile.php?id=100085167975826">Facebook</a></li>
                    <li><a href="https://www.linkedin.com/in/emily-selge-059983339/">LinkedIn</a></li>
                    <li><a href="https://github.com/EmilySelge">Github</a></li>
                </ul>
                <ul class="space-y-2">
                    <li class="mb-4 font-medium">Pages</li>
                    <li><RouterLink to="/">Home</RouterLink></li>
                    <li><RouterLink to="/services">Services</RouterLink></li>
                    <li><RouterLink to="/about">About</RouterLink></li>
                    <li><RouterLink to="/contact" class=" text-black rounded-full inline">Contact</RouterLink></li>
                </ul>
            </div>
            
          <div class="mt-12 md:mt-0">
            <h2 class="text-xl lg:text-2xl">Let's Talk</h2>
            <p class="mt-4">Have a project in mind? Let’s connect and create a website that<br> brings your ideas to life and engages your audience.</p>
            <RouterLink to="/contact" class="bg-white text-sm flex items-center w-fit px-4 py-2 border rounded-lg mt-6 border-fuchsia-800">Contact 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3 ml-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
            </RouterLink>
          </div>
            
        </div>
        <p class="mt-8 lg:mt-12">© 2024 Emily Selge.</p>
    </section>
</template>

<script setup>

</script>