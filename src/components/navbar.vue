<template>
    <nav class="p-4 px-8 uppercase space-x-6 mt-2 hidden lg:block text-pink-950 rounded-md absolute top-0 left-0 w-full z-10 bg-transparent bg text-right text-sm font-medium ">
      <RouterLink to="/" class="" >emily s.</RouterLink>
      <RouterLink to="/services" class="">services</RouterLink>
      <RouterLink to="/about" class="">about</RouterLink>
      <RouterLink to="/projects" class="">projects</RouterLink>
      <RouterLink to="/contact" class=" text-black rounded-full inline">let's talk 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 inline align-text-top">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
        </svg>

      </RouterLink>
    </nav>

    <nav class="lg:hidden flex flex-col items-end py-4  px-4">
      <button @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
     
      <ul class="flex flex-col py-8 items-center w-full uppercase space-y-7 text-sm" :class="{'hidden': !menuOpen, 'block': menuOpen}">
        <RouterLink to="/" class="" >emily s.</RouterLink>
        <RouterLink to="/services" class="">services</RouterLink>
        <RouterLink to="/about" class="">about</RouterLink>
        <RouterLink to="/projects" class="">projects</RouterLink>
        <RouterLink to="/contact" class=" text-black rounded-full inline">let's talk 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5 inline align-text-top">
              <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clip-rule="evenodd" />
          </svg>
        </RouterLink>
      </ul>
      
    </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Tracks whether the menu is open or closed
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Toggles the menu's visibility
    },
  },
};
</script>