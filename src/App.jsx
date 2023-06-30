import { useState, useEffect } from "react";
import image from "../src/assets/macbook.jpeg";
import image2 from "../src/assets/macbook2.jpeg";
import gridImage1 from "../src/assets/grid-1.jpeg";
import gridImage2 from "../src/assets/grid-2.jpeg";
import gridImage3 from "../src/assets/grid-3.jpeg";
import gridImage4 from "../src/assets/grid-4.jpeg";
import gridImage5 from "../src/assets/grid-5.jpeg";
import gridImage6 from "../src/assets/grid-6.jpeg";
import gridImage7 from "../src/assets/grid-7.jpeg";
import gridImage8 from "../src/assets/grid-8.jpeg";
import gridImage9 from "../src/assets/grid-9.jpeg";
import gridImage10 from "../src/assets/grid-10.jpeg";

function App() {
  const html = document.querySelector("html");

  const [theme, setTheme] = useState(false);

  const handleChange = (event) => {
    setTheme(event.target.checked);
    if (theme == false) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex">
        <h1
          className="text-8xl font-bold text-center
       my-10"
        >
          Belajar{" "}
          <label className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            Tailwind CSS
          </label>
        </h1>
      </div>
      <section className="mb-10 bg-gradient-to-br from-indigo-200 via-red-400 to-yellow-300">
        <h2 className="text-3xl">Spacing</h2>
        <div className="m-13">Margin</div>
        <div className="py-8">Padding</div>
      </section>

      <section className="mb-10 bg-green-200">
        <h2 className="text-3xl">Sizing</h2>
        <div className="w-32 h-32 bg-wpu">Kotak 1</div>
      </section>

      <section className="font-inter max-w-3xl mx-auto">
        <h2 className="mb-2 text-4xl font-bold">
          Belajar Typography TailwindCSS
        </h2>
        <div className="mb-4 text-lg text-gray-500">
          By{" "}
          <a href="" className="text-gray-700 font-semibold">
            Dwi Prasetyo
          </a>{" "}
          , 04 Juni 2023
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet{" "}
          <a
            href=""
            className="underline font-semibold text-blue-600
          "
          >
            consectetur
          </a>{" "}
          adipisicing elit. Esse enim fuga earum cumque quibusdam odit repellat
          perferendis, ut ducimus inventore necessitatibus laudantium voluptates
          et exercitationem totam accusantium vitae? Quos facere perferendis nam
          at eos ab animi? Esse, sapiente deserunt, molestias adipisci ipsam
          magnam perferendis, exercitationem iure sequi rem ut qui!
        </p>
        <blockquote className="mb-4 italic font-thin text-xl">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
          magnam error neque, suscipit obcaecati dolore! Consectetur nemo a
          tempora deleniti."
        </blockquote>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur , adipisicing elit. Fugiat,
          illum laboriosam soluta inventore nisi eos neque possimus velit
          tenetur voluptates aut, explicabo quaerat vel at eligendi natus autem
          dolores repellendus.
        </p>
      </section>

      <div
        className="max-w-xl h-96 bg-[#bada55] mx-auto mt-[42px] overflow-y-scroll"
        style={{
          backgroundImage: `url("https://source.unsplash.com/1000x600?computer")`,
        }}
      >
        <p className="p-5 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          voluptas saepe mollitia ipsa quis porro distinctio temporibus numquam.
          Rerum officia fuga accusamus, ipsum dolorum reprehenderit doloribus
          quod, nostrum repudiandae aspernatur ipsa nesciunt architecto, nemo
          alias ratione enim porro ut laudantium veniam. Accusantium aliquid
          odit nulla dignissimos, in ipsa maiores voluptatem. Quisquam hic
          delectus animi, totam nobis deleniti ea et magnam consequuntur
          blanditiis voluptatum laudantium eum, iste rem qui consequatur modi
          sint. Sapiente nulla sequi corporis aliquid. Et fugit placeat fuga eos
          fugiat aliquam eius dignissimos reiciendis ut vel unde quaerat
          sapiente obcaecati natus possimus soluta id accusantium nisi
          praesentium modi, deserunt iusto laudantium cum nulla! Voluptates,
          maiores, sint iste enim quidem et est reprehenderit quos voluptatem
          consequatur, aspernatur dicta minima alias totam. Illo nihil unde
          minima, saepe ipsum labore tempora consequatur, illum possimus
          repellat inventore cupiditate! Id adipisci, autem facilis, officiis
          odio unde nam sapiente minima impedit aliquid magni possimus facere,
          voluptatum non. Accusantium, fuga? Corporis, quidem. Cumque totam
          fugit, aut est officiis maiores id, nihil eaque, quam nam repellendus
          ea deserunt quae voluptates impedit tempore voluptatum! Velit
          suscipit, enim exercitationem at perferendis vero, praesentium beatae
          corporis veritatis, rem consequuntur quis incidunt. Ab quia rem nemo
          quaerat cumque aliquid adipisci.
        </p>
      </div>
      <div
        className="flex mt-32 max-w-xl mx-auto h-96 bg-slate-300 bg-contain bg-no-repeat bg-center rounded-2xl shadow-xl shadow-slate-500 overflow-hidden border-8 blur-sm hover:blur-none"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="w-[200px] h-[200px] bg-white/30 m-auto backdrop-blur-md rounded-full"></div>
        {/* <div className="w-full h-full bg-blue-300 mix-blend-multiply"></div> */}
      </div>

      <hr className="my-20" />

      <div className="flex justify-center">
        <span className="text-sm text-slate-500 mr-2">Light</span>
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          value={theme}
          onChange={handleChange}
        />
        <label htmlFor="toggle">
          <div className="w-9 h-5 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full toggle-circle"></div>
          </div>
        </label>
        <span className="text-sm text-slate-500 ml-2">Dark</span>
      </div>

      <button
        className="my-10 bg-sky-500 px-5 py-2 
      rounded-full text-white font-semibold 
      font-inter block mx-auto hover:bg-sky-600 
      active:bg-sky-700 focus:ring focus:ring-sky-300
      dark:bg-slate-100 dark:text-slate-800 dark:hover:text-slate-900
      dark:hover:bg-slate-300"
      >
        Simpan
      </button>

      <div
        className="max-w-lg my-10 border border-slate-200 
      rounded-lg mx-auto p-5 shadow-md hover:bg-sky-500 
      group font-serif dark:hover:bg-slate-300"
      >
        <h5
          className="font-bold text-slate-700 text-lg mb-3 
        group-hover:text-white dark:group-hover:text-slate-800"
        >
          My Card
        </h5>
        <p
          className="text-slate-600 group-hover:text-white 
        selection:bg-lime-300 selection:text-slate-900 
        first-line:uppercase first-line:tracking-widest 
        first-letter:text-7xl first-letter:float-left 
        first-letter:mr-3 dark:group-hover:text-slate-800"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem repudiandae perferendis dolore sapiente suscipit,
          accusamus ipsa quae distinctio facilis aspernatur, alias quia?
          Molestiae facere reiciendis commodi ad cupiditate ab sunt?
        </p>
      </div>

      <div className="max-w-lg border border-slate-200 rounded-xl mx-auto shadow-md font-inter p-5">
        <form action="">
          <label htmlFor="email">
            <span className="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-500 after:ml-0.5">
              Email
            </span>
            <input
              type="email"
              id="email"
              placeholder="Masukkan Email..."
              className="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700
              invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
            />
            <p className="text-sm m-1 text-pink-700 invisible peer-invalid:visible">
              Email tidak valid
            </p>
          </label>
        </form>
      </div>

      <hr className="my-20" />

      <div
        className="w-40 h-40 bg-sky-500 mx-auto rounded-lg shadow-lg
      hover:scale-125 hover:rotate-45 hover:bg-pink-500 transition 
      origin-top-left"
      ></div>

      <div className="w-40 h-40  mx-auto mt-20 group">
        <div
          className="w-full h-full bg-sky-500 rounded-lg shadow-lg
        group-hover:rotate-180 origin-top-left transition duration-1000 delay-1000"
        ></div>
      </div>

      <div
        className="w-40 h-40 bg-pink-500 mx-auto 
      rounded-lg shadow-lg mt-20 animate-spin-slow"
      ></div>
      <div
        className="w-40 h-40 bg-pink-500 mx-auto 
      rounded-full shadow-lg mt-20 animate-ping"
      ></div>
      <div
        className="w-40 h-40 bg-pink-500 mx-auto 
      rounded-full shadow-lg mt-20 animate-pulse"
      ></div>
      <div
        className="w-40 h-40 bg-pink-500 mx-auto 
      rounded-full shadow-lg mt-20 animate-bounce"
      ></div>
      <div
        className="w-40 h-40 bg-pink-500 mx-auto 
      rounded-lg shadow-lg mt-20 animate-wiggle"
      ></div>

      <hr className="my-20 border-t-4" />

      <div className="container px-8 mx-auto">
        <div className="border rounded-lg shadow-lg p-10 relative">
          <div className="w-10 h-10 bg-pink-200 rounded-full flex absolute -top-5 -right-5 cursor-pointer">
            <span className="text m-auto">&#x2715;</span>
          </div>
          <img
            src={image}
            alt="Laptop"
            width={150}
            className="float-left mr-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nemo odit temporibus aliquid. Vitae, quo molestiae distinctio itaque
            facilis placeat error? Quam praesentium mollitia nobis eligendi
            laboriosam quos atque perspiciatis, corporis eos ipsam! Excepturi
            aliquid voluptatum eaque in eum dolorum exercitationem, modi commodi
            corporis neque consectetur magnam eius aut ad!
          </p>
        </div>
      </div>

      <div className="container px-8 mx-auto mt-20">
        <div className="border rounded-lg shadow-lg p-10 relative">
          <div className="w-10 h-10 bg-sky-200 rounded-full flex absolute -top-5 left-1/2 -translate-x-1/2 cursor-pointer">
            <span className="text-xl m-auto">&#8593;</span>
          </div>
          <img
            src={image}
            alt="Laptop"
            width={150}
            className="float-left mr-3"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
            nemo odit temporibus aliquid. Vitae, quo molestiae distinctio itaque
            facilis placeat error? Quam praesentium mollitia nobis eligendi
            laboriosam quos atque perspiciatis, corporis eos ipsam! Excepturi
            aliquid voluptatum eaque in eum dolorum exercitationem, modi commodi
            corporis neque consectetur magnam eius aut ad!
          </p>
        </div>
      </div>

      <div className="container px-8 mx-auto mt-20">
        <div className="border rounded-lg shadow-lg p-10 columns-2">
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image"
            className="mb-4"
          />
        </div>
      </div>

      <hr className="my-24 border-t-4" />

      <div
        className="container px-6 font-inter max-w-md mx-auto
      sm:max-w-xl md:max-w-5xl"
      >
        <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
          Dwi <span className="text-sky-500">Prasetyo</span>
        </h3>
        <img
          src={image2}
          alt="Macbook"
          className="mt-4 rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full 
          sm:object-cover sm:object-center"
        />
        <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">
          Mari Belajar Programming Bersama WPU
        </h2>
        <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum
          debitis quidem qui sapiente similique, harum asperiores dicta
          voluptates laudantium deserunt, commodi aspernatur animi reiciendis, .
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            href="#"
            className="inline-block px-5 py-3 bg-red-600 text-white rounded-lg 
            shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base"
          >
            Subscribe Channel Youtube
          </a>
        </div>
      </div>

      <hr className="my-24 border-t-4" />

      <div
        className="container px-6 font-inter max-w-md mx-auto
      sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0"
      >
        <div className="lg:p-12 lg:flex-1">
          <h3 className="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
            Dwi <span className="text-sky-500">Prasetyo</span>
          </h3>
          <img
            src={image2}
            alt="Macbook"
            className="mt-4 rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full 
          sm:object-cover sm:object-center lg:hidden"
          />
          <h2 className="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm:text-4xl">
            Mari Belajar Programming Bersama WPU
          </h2>
          <p className="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum
            debitis quidem qui sapiente similique, harum asperiores dicta
            voluptates laudantium deserunt, commodi aspernatur animi reiciendis,
            .
          </p>
          <div className="mt-4 sm:mt-6">
            <a
              href="#"
              className="inline-block px-5 py-3 bg-red-600 text-white rounded-lg 
            shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base"
            >
              Subscribe Channel Youtube
            </a>
          </div>
        </div>
        <div className="hidden lg:flex w-1/2">
          <img
            src={image2}
            alt="Macbook"
            className="object-cover rounded-l-3xl"
          />
        </div>
      </div>

      <h2 className="mt-24 mb-10 text-center font-bold text-3xl text-slate-700">
        My Gallery
      </h2>

      <div
        className="container mx-auto px-6 font-inter 
      sm:flex sm:flex-wrap sm:gap-6 
      sm:justify-evenly"
      >
        <div
          className="rounded-md shadow-lg 
        overflow-hidden mb-10 sm:mb-0 sm:w-64
        md:w-80 lg:w-72"
        >
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image Caption"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-slate-700">
              Image Title
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
              iure!
            </p>
          </div>
        </div>
        <div
          className="rounded-md shadow-lg 
        overflow-hidden mb-10 sm:mb-0 sm:w-64
        md:w-80 lg:w-72"
        >
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image Caption"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-slate-700">
              Image Title
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
              iure!
            </p>
          </div>
        </div>
        <div
          className="rounded-md shadow-lg 
        overflow-hidden mb-10 sm:mb-0 sm:w-64
        md:w-80 lg:w-72"
        >
          <img
            src="https://source.unsplash.com/600x400"
            alt="Image Caption"
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-slate-700">
              Image Title
            </div>
            <p className="text-sm text-slate-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
              iure!
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-64 p-2 font-inter grid grid-cols-2 gap-2 
      md:grid-cols-4 md:p-4"
      >
        <h2
          className="h-15 text-xl font-semibold 
        text-slate-700 md:col-start-4 md:row-start-2
        md:flex"
        >
          <span className="self-center">Welcome to This Website</span>
        </h2>
        <div
          className="h-15 text-lg font-bold 
        text-slate-600 md:col-start-2 md:row-start-2
        md:flex"
        >
          <span className="self-end">@dwiprasetyo</span>
        </div>
        <div
          className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] 
        xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500"
        >
          <div
            style={{ "--grid-1": `url(${gridImage1})` }}
            className="w-full h-full bg-[url:var(--grid-1)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-2": `url(${gridImage2})` }}
            className="w-full h-full bg-[url:var(--grid-2)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-3": `url(${gridImage3})` }}
            className="w-full h-full bg-[url:var(--grid-3)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-4": `url(${gridImage4})` }}
            className="w-full h-full bg-[url:var(--grid-4)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-5": `url(${gridImage5})` }}
            className="w-full h-full bg-[url:var(--grid-5)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-2 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-6": `url(${gridImage6})` }}
            className="w-full h-full bg-[url:var(--grid-6)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-4 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-7": `url(${gridImage7})` }}
            className="w-full h-full bg-[url:var(--grid-7)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-8": `url(${gridImage8})` }}
            className="w-full h-full bg-[url:var(--grid-8)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-9": `url(${gridImage9})` }}
            className="w-full h-full bg-[url:var(--grid-9)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
        <div className="h-15 bg-blue-500 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] md:col-start-3 overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div
            style={{ "--grid-10": `url(${gridImage10})` }}
            className="w-full h-full bg-[url:var(--grid-10)] 
            bg-cover bg-center absolute group-hover:scale-125 
            group-hover:rotate-12 transition-all duration-500"
          ></div>
        </div>
      </div>

      <div className="mb-96"></div>
      <div className="w-10 h-10 bg-sky-200 rounded-full flex fixed bottom-5 right-5 cursor-pointer">
        <a href="#" className="text-xl m-auto">
          &#8593;
        </a>
      </div>
    </>
  );
}

export default App;
