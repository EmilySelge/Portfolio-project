<template>
  <section class="text-center bg-bottom bg-no-repeat bg-cover" style="background-image: url('src/assets/backgroundgradient.jpeg'); font-family: 'Satoshi', sans-serif;">
    <div class="flex flex-col w-dvw p-8 lg:p-0 h-dvh bg-opacity-50 backdrop-blur-md bg-white">
      <div class=" mt-32 lg:mt-48">
        <h1 class="md:text-8xl text-5xl leading-0 stardom italic text-center tracking-tight">
          Web <span class="">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Designer</span>
          </span> & <br class="hidden lg:inline">
          <span class="">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600">Developer</span>
          </span>
        </h1>
        <p class="mt-12 font-medium">Premium web design and development services<br class="hidden lg:inline"> to bring your ideas to life and help your business grow.</p>
      </div>
      <div class="mt-44 flex flex-col items-center animate-bounce text-center">
        <h2>see more</h2>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </div>
  </section>
  <section class=" lg:px-24 lg:py-12 px-12">
        <div class="grid grid-rows-2 grid-cols-4 gap-8 lg:flex flex-wrap justify-between py-12">
            <i class="devicon-javascript-plain lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-python-plain lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-vuejs-plain lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-php-plain lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-mysql-original lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-tailwindcss-original lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-git-plain lg:text-6xl text-4xl text-black"></i>
            <i class="devicon-figma-plain lg:text-6xl text-4xl text-black"></i>
        </div>
        <div class="flex space-y-8 flex-col lg:flex-row lg:space-y-0 items-center lg:py-12 lg:space-x-12">
            <div class=" rounded-md space-y-2  bg-opacity-10 border shadow-[5px_5px_rgba(200,_162,_200,_0.4),_10px_10px_rgba(200,_162,_200,_0.3),_15px_15px_rgba(200,_162,_200,_0.2),_20px_20px_rgba(200,_162,_200,_0.1),_25px_25px_rgba(200,_162,_200,_0.05)] border-violet-700 p-6">
                <h3 class="text-violet-700-700">01</h3>
                <h2 class="text-lg uppercase">Design</h2>
                <p class="text-sm">Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
                <span class="flex items-end space-x-1 hover:underline underline-offset-4 duration-300">
                  <RouterLink to="/services" class="block uppercase text-sm mt-2">about design</RouterLink> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                    </svg>
                </span>
       
            </div>
            <div class=" rounded-md shadow-[5px_5px_rgba(200,_162,_200,_0.4),_10px_10px_rgba(200,_162,_200,_0.3),_15px_15px_rgba(200,_162,_200,_0.2),_20px_20px_rgba(200,_162,_200,_0.1),_25px_25px_rgba(200,_162,_200,_0.05)] space-y-2 bg-opacity-5 border border-violet-900 p-6">
                <h3 class="text-violet-700">02</h3>
                <h2 class="text-lg uppercase">Development</h2>
                <p class="text-sm">Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
                <span class="flex items-end space-x-1 hover:underline underline-offset-4 duration-300">
                    <RouterLink to="/services" class="block uppercase text-sm mt-2">about development</RouterLink> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                    </svg>

                </span>
       
            </div>
            <div class=" rounded-md space-y-2 bg-opacity-10 shadow-[5px_5px_rgba(200,_162,_200,_0.4),_10px_10px_rgba(200,_162,_200,_0.3),_15px_15px_rgba(200,_162,_200,_0.2),_20px_20px_rgba(200,_162,_200,_0.1),_25px_25px_rgba(200,_162,_200,_0.05)] border border-black p-6">
                <h3 class="text-violet-700">03</h3>
                <h2 class="text-lg uppercase">Content & SEO</h2>
                <p class="text-sm">Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
                <span class="flex items-end space-x-1 hover:underline underline-offset-4 duration-300">
                    <RouterLink to="/services" class="block uppercase text-sm mt-2">about development</RouterLink> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
                    </svg>

                </span>
       
            </div>
        </div>
  </section>
  <Section class="px-32 py-24 bg-fuchsia-50 bg-opacity-50 hidden">
    <h2 class="text-6xl font-light">Selected <span class="italic" style="font-family: 'Stardom', sans-serif;">Work</span></h2>
    <div class="grid grid-cols-2 grid-rows-2 mt-12 gap-12">
      <img src="" class="rounded-xl" alt="">
      <img src="" class="rounded-xl" alt="">
      <img src="" class="rounded-xl" alt="">
      <img src="" class="rounded-xl" alt="">
    </div>
  </Section>
  <section class="flex flex-col items-center px-8 lg:px-40 py-24 bg-[url()]">
    <div class="text-center  px-4 ">
        <h3 class="uppercase">The process</h3>
        <h1 class="text-5xl lg:text-8xl font-light mt-2">Your Website<br class="hidden lg:inline"> <span class="italic" style="font-family: 'Stardom', sans-serif;">in 5 steps</span></h1>
        <p class="mt-6">Our process ensures that we create<br class="hidden lg:inline"> a website tailored to your business needs.</p>
    </div>
    <div class="rounded-full p-2 border mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
            <path fill-rule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clip-rule="evenodd" />
        </svg>
    </div>
    <div class=" mt-12 space-y-8 lg:-space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-black before:from-transparent before:via-black">
        <!-- Item #1 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
        <!-- Icon -->
        <div class="flex items-center justify-center border border-black ring-8 ring-white w-10 h-10 rounded-full bg-white  shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <h1 class="">1</h1>
        </div>
        <!-- Card -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  bg-fuchsia-300 bg-opacity-10 p-8 rounded border border-black shadow-md shadow-violet-300">
            <div class="uppercase flex  text-xs rounded-md text-right items-end justify-between ">
              <h3 class="uppercase text-xs">Do we match?</h3>
              <p class="bg-white p-2 border border-violet-200 rounded-sm">2 Hours</p>
            </div>
            <h2 class="uppercase mt-1 text-lg text-violet-500">discovery call</h2>
            <p class="text-sm text-violet-950 mt-2 leading-normal text-pretty">Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?</p>
            <ul class="list-disc mt-4 text-sm text-violet-950 list-inside space-y-2 pt-2">
                <li>Determine how I can best assist you</li>
                <li>Understand the goals you have for your website</li>
                <li>We get to know each other better</li>
            </ul>
        </div>
        </div>
        <!-- Item #2 -->
        <div class="relative flex items-center mt-0 justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icon -->
            <div class="flex  rounded-full items-center border border-black ring-8 ring-white justify-center w-10 h-10 bg-white  shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <h1 class="">2</h1>
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-fuchsia-300 bg-opacity-10 p-8 text-sm rounded border space-y-2  border-black shadow-md shadow-violet-300">
                <div class="uppercase flex  text-xs rounded-md text-right items-end justify-between ">
                  <h3 class="uppercase text-xs">Do we match?</h3>
                  <p class="bg-white p-2 border border-violet-200 rounded-sm">1 week</p>
                </div>
                <h2 class="uppercase text-violet-500 text-lg">Concept & strategy</h2>
                <p class="text-sm text-violet-950 mt-2 leading-normal text-pretty">Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.</p>
                <ul class="list-disc mt-4 text-sm text-violet-950 list-inside space-y-2 pt-2">
                    <li>UX Design</li>
                    <li>Wireframes</li>
                    <li>Interactive Prototype</li>
                </ul>
            </div>
          </div>
        <!-- Item #3 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 border border-black ring-8 ring-white  rounded-full bg-white  shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <h1 class="">3</h1>
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-fuchsia-300 bg-opacity-10 p-8 rounded border space-y-2  border-black shadow-md shadow-violet-300">
                <div class="uppercase flex  text-xs rounded-md text-right items-end justify-between ">
                  <h3 class="uppercase text-xs">some magic</h3>
                  <p class="bg-white p-2 border border-violet-200 rounded-sm">1 week</p>
                </div>
                <h2 class="uppercase text-violet-500 text-lg">web design</h2>
                <p class="text-sm text-violet-950 mt-2 leading-normal text-pretty">Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.</p>
                <ul class="list-disc mt-4 text-sm text-violet-950 list-inside space-y-2 pt-2">
                    <li>High-end web design tailored to your brand</li>
                    <li>Interactive prototype of the design</li>
                </ul>
            </div>
          </div>
        <!-- Item #4 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 border border-black ring-8 ring-white  rounded-full bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <h1 class="">4</h1>
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-fuchsia-300 bg-opacity-10 p-8 rounded border space-y-2  border-black shadow-md shadow-violet-300">
                <div class="uppercase flex  text-xs rounded-md text-right items-end justify-between">
                  <h3 class="uppercase text-xs">more magic</h3>
                  <p class="bg-white p-2 border border-violet-200 rounded-sm">2 weeks</p>
                </div>
                <h2 class="uppercase text-violet-500 text-lg">development</h2>
                <p class="text-sm text-violet-950 mt-2 leading-normal text-pretty">In this step, we bring your high-end design to life with custom development. You'll receive a fully responsive website built from the ground up, ensuring optimal performance and a unique, visually stunning experience.</p>
                <ul class="list-disc mt-4 text-sm text-violet-950 list-inside space-y-2 pt-2">
                    <li>Custom-built websites</li>
                    <li>Fully responsive design</li>
                    <li>Unique, visually stunning experience</li>
                </ul>
            </div>
          </div>
        <!-- Item #5 -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <!-- Icon -->
            <div class="flex items-center justify-center w-10 h-10 border border-black ring-8 ring-white rounded-full bg-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <h1 class="">5</h1>
            </div>
            <!-- Card -->
            <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-fuchsia-300 bg-opacity-10 p-8 rounded border space-y-2  border-black shadow-md shadow-violet-300">
                <div class="uppercase flex  text-xs rounded-md text-right items-end justify-between ">
                  <h3 class="uppercase text-xs">Ready to go</h3>
                  <p class="bg-white p-2 border border-violet-200 rounded-sm">2 Hours</p>
                </div>
                <h2 class="uppercase text-violet-500 text-lg">website onboarding</h2>
                <p class="text-sm text-violet-950 mt-2 leading-normal text-pretty">I’ll manage the entire website launch process, ensuring every detail is taken care of from start to finish. From final testing and optimization to deployment, I’ll ensure your site is fully functional, fast, and optimized for performance.</p>
                <ul class="list-disc mt-4 text-sm text-violet-950 list-inside space-y-2 pt-2">
                    <li>Complete website launch management</li>
                    <li>Ongoing website maintenance</li>
                    <li>Security and performance optimization</li>
                </ul>
            </div>
        </div>
    </div>
  </section>
  <section class="flex flex-col items-center pt-24 pb-32 bg-green-50 bg-opacity-50 px-8 lg:px-36">
    <h1 class="text-5xl lg:text-8xl text-center font-light text-green-950">What my <span class="italic" style="font-family: 'Stardom', sans-serif;"><br>co-workers say</span></h1>
    <p class="mt-8 text-center">See what my clients have to say about working with me<br class="hidden lg:inline"> and the results I helped them achieve.</p>
    <div class="flex flex-col lg:flex-row space-y-12 lg:space-y-0  lg:space-x-20 mt-12 lg:mt-24">
      
      <div class="bg-white p-8 border  border-green-950 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <h2 class="">A Dedicated and Reliable Team Player</h2>
        <p class="text-sm mt-4  text-gray-900">"Emily is a talented and dependable colleague, always bringing creativity and attention to detail to every project. She collaborates seamlessly with the team, consistently delivering high-quality work on time. A true asset to any team!"</p>
        <div class="mt-6 flex space-x-4 items-center">
          <img src="../assets/userpic.webp" class="size-10 rounded-full" alt="">
          <div>
            <h3 class="font-semibold text-sm">Co Worker 1</h3>
          </div>
        </div>
      </div>
      <div class="bg-white p-8 border border-green-950 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <h2 class="">A Creative and Collaborative Professional</h2>
        <p class="text-sm mt-4  text-gray-900">"Emily is an exceptional team player who combines creativity with a strong work ethic. She is always eager to help, offering valuable insights and solutions while maintaining a positive attitude. Her attention to detail and reliability make her a standout colleague</p>
        <div class="mt-6 flex space-x-4 items-center">
          <img src="../assets/userpic.webp" class="size-10 rounded-full" alt="">
          <div>
            <h3 class="font-semibold text-sm">Co worker 2</h3>
          </div>
        </div>
      </div>
      
        
    </div>
  </section>
  <section class="text-center py-24">
        <h3 class="uppercase mb-2 text-sm lg:text-base">project in mind?</h3>
        <h1 class=" text-center font-extralight text-5xl lg:text-8xl">Lets make your <br><span class="italic" style="font-family: 'Stardom', sans-serif;">website shine</span></h1>
        <p class="mt-4 text-sm lg:text-base">Premium web design, webflow, and SEO services<br> to help your business stand out.</p>
        <RouterLink to="/contact" class="text-black lg:text-base text-sm py-2 px-6 bg-fuchsia-200 border rounded-full border-black inline-block mt-8">get in touch</RouterLink>
  </section>
</template>


<script>

</script>