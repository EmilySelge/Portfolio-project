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
      
    <!-- <div class="lg:w-1/2 flex flex-col items-center justify-center mt-24 relative h-[500px]">
  
      <div class="laptop-container">
      <div class="laptop-wrapper">
       
        <div class="laptop-screen">
    <div class="screen-front bg-cover bg-[url('data:image/jpeg;base64,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')]"></div>
    <div class="screen-back bg-cover bg-[url('https://i.pinimg.com/originals/63/1c/ec/631cec20b3fa5496f4c6b46b2924bafc.png')]">
    </div>
  </div>
        <div class="laptop-keyboard">
          <div class="keyboard-content ">
          </div>
        </div>
       
        <div class="laptop-hinge"></div>
        <div class="laptop-bottom"></div>
      </div>
    </div> -->
    <!-- <div class="container">
    <div class="cube">
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
      <div class="face left">Left</div>
      <div class="face right">Right</div>
      <div class="face front">Front</div>
      <div class="face back">Back</div>
    </div>
    <div class="cube-2">
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
      <div class="face left">Left</div>
      <div class="face right">Right</div>
      <div class="face front">Front</div>
      <div class="face back">Back</div>
    </div>
  </div> -->
  <!-- </div> -->


  </section>

    
      
  </template>

  <style>

  .container {
    width: 200px;
    height: 200px;
    perspective: 500px;
    margin: 100px;
  }

  .cube {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform: rotate3d(1, 1, 0, 45deg);
  }
  .cube-2 {
    position: relative;
    
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transform:  translateX(50px) translateZ(70px) rotate3d(1, 1, 0, 45deg) rotateX(50deg);
  }

  .face {
    background: skyblue;
    border: 2px solid black;
    position: absolute;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    font-size: 2rem;
  }

  /* Front and Back */
  .front {
    width: 200px;
    height: 200px;
    transform: translateZ(10px);
  }

  .back {
    width: 200px;
    height: 200px;
    transform: translateZ(-10px) rotateY(180deg);
  }

  /* Left and Right (depth = 20px) */
  .left {
    width: 20px;
    height: 200px;
    transform: translateX(-10px) rotateY(-90deg);
  }

  .right {
    width: 20px;
    height: 200px;
    transform: translateX(190px) rotateY(90deg);
  }

  /* Top and Bottom (depth = 20px) */
  .top {
    width: 200px;
    height: 20px;
    transform: translateY(-10px) rotateX(90deg);
  }

  .bottom {
    width: 200px;
    height: 20px;
    transform: translateY(190px) rotateX(-90deg);
  }

    .laptop-container {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        perspective: 1200px;
        margin: 20px auto;
      }
      
      /* 3D scene that rotates */
      .laptop-wrapper {
        position: relative;
        width: 112px; /* Matches your w-28 */
        transform-style: preserve-3d;
        animation: rotate 15s infinite linear;
      }
      
      @keyframes rotate {
        0% { transform: rotateY(0deg) rotateX(15deg); }
        100% { transform: rotateY(360deg) rotateX(15deg); }
      }
      
      /* Screen part - the first div */
      .laptop-screen {
    width: 12rem;
    height: 8rem;
    position: absolute;
    transform-origin: bottom;
    transform: rotateX(-10deg) translateY(-20px) translateZ(-55px);
    transform-style: preserve-3d;
  }

  .screen-front, .screen-back {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    backface-visibility: hidden;
  }

  /* Front of the screen (display side) */
  .screen-front {
    background-color: #4b5563; /* Gray display color */
    transform: translateZ(1px); /* Slightly in front to avoid z-fighting */
    border: solid 8px black;
  }

  /* Back of the screen (e.g. laptop logo or design) */
  .screen-back {
    background-color: #c7ccd3; /* Tailwind gray-800 */
    transform: rotateY(180deg) translateZ(1px); /* Flip for back face */
  }
      
      /* Keyboard part - the second div */
      .laptop-keyboard {
        width: 12rem; /* w-28 */
        height: 8rem; /* h-16 */
        background-color: white;
        border-radius: 6px; /* rounded-md */
        position: absolute;
        top: 75px; /* positioned right below the screen */
        transform: rotateX(50deg);
        transform-style: preserve-3d;
        
      }
      
      .keyboard-content {
        width: 100%;
        height: 100%;
        background-image: url('https://media.istockphoto.com/id/471770948/photo/macbook-pro-keyboard.jpg?s=612x612&w=0&k=20&c=C67YOvNztDJuY56Jgn47EnP4aN6B5xXFKPm4ZRWKcqE=');
        background-size: cover;
        background-position: center;
      }
      
      /* Connect the two parts with a hinge effect */
      .laptop-hinge {
        width: 11rem;
        height: 4px;
        background-color: #333;
        position: absolute;
        transform-style: preserve-3d;
      
        transform: translateX(0.5rem) translateY(97px) translateZ(-50px);
      }
      
      /* Bottom of the laptop for 3D effect */
      .laptop-bottom {
        width: 12rem;
        height: 8rem;
        background-color: #c7ccd3;
        position: absolute;
        top: 75px;
        transform: rotateX(50deg) translateZ(-3px);
        border-radius: 6px;
        
      }

  .square {
    transform: rotateY(45deg);
    animation: rotateAnimation 1s linear infinite;
  }

  @keyframes rotateAnimation {
    from {transform: rotateY(45deg);}
    to {transform: rotateY(225deg);}
  }


  </style>

  <script>
  import { RouterLink } from 'vue-router';


  </script>