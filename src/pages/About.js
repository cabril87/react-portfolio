import React from "react";
import withTransition from "../withTransition"
import image from "../components/Images/me.JPG"



function About() {
  return (
    <section>
     <div class="flex flex-wrap min-h-screen">
      <div class="bg-white md:w-1/2 min-h-screen">
        <div class="mx-32">
          <h1 class="text-8xl font-bold mt-16">Hi, im Carlos.</h1>
          <span class="text-4xl font-bold mt-16"> Nice to meet you</span>

         
          {/* <div class="flex mt-16 font-light text-gray-500">
            <div class="pr-4">
              <span class="uppercase">City</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Fuquay-Varina</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">State</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">NC</p>
            </div>
            
          </div> */}

         
          <div
            class="description w-full sm: md:w-3/3 mt-16 text-gray-500 text-sm"
          >
             My journey and passion in web developement started early 2021, in the mist of a global pandemic. Theres something great about.. 
          </div>

          <button class="uppercase mt-5 text-sm font-semibold hover:underline">
            read more
          </button>
        </div>
      </div>
      <div class="bg-red-600  md:w-1/2 min-h-screen">
        <img
          src={image}
          alt=""
          className="sm:min-h-screen"
        />
      </div>
      
    </div>
</section>

  );
}

export default withTransition(About);
