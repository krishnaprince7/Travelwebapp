import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Sevice = () => {
  return (
    <div className="grid max-w-[1240px] mx-auto py-16 px-4 lg:grid-cols-3 gap-4">
      <div className="flex flex-col lg:col-span-2 justify-evenly  ">
        <div>
          <h1 className="font-bold text-4xl py-2">
            LUXURY INCLUDED VICATION FOR TWO PEOPLE
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum iste
            aliquam culpa, molestias corporis nisi maxime. Odio ad nihil aliquid
            consectetur asperiores sint doloremque laudantium dolores velit
            eveniet explicabo debitis vo luptatum nesciunt ex voluptate nobis
            rerum consequatur laborum, voluptatibus quidem distinctio beatae
            tempore? Saepe, nobis natus laudantium, possimus delectus laborum
            fugit libero ducimus temporibus, pariatur molestiae quo minima
            tenetur ea. Illo cum laudantium ex quasi at voluptatum id distinctio
            velit dolorum ipsa incidunt ea nesciunt non saepe nisi maxime
            doloribus facere quibusdam, voluptates reiciendis repellen dus
            earum! Iusto, obcaecati maiores nemo quos voluptatem vero soluta
            alias vel dolore, iste suscipit?
          </p>
        </div>
        {/* //First Connternior */}
        <div className="grid lg:grid-cols-2 gap-8 bg-white py-4 ">
          <div className="flex text-center flex-col lg:flex-row items-center">
            <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-md">
              <RiCustomerService2Fill size={70} />
            </button>
            <div>
              <h1 className="font-extrabold text-xl">LEADING SERVICE</h1>
              <p className="text-[14px] font-semibold">
                ALL-INCLUSIVE COMPANY FOR 20 YEAR IN-A-ROW
              </p>
            </div>
          </div>

          <div className="flex text-center flex-col lg:flex-row items-center">
            <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] rounded-md">
              <MdOutlineTravelExplore size={70} />
            </button>
            <div>
              <h1 className="font-extrabold text-xl">AUTOMATIC BOOKING</h1>
              <p className="text-[14px] font-semibold">
                ALL-INCLUSIVE COMPANY FOR 20 YEAR IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border">
        <p className="text-center">GET AN ADDITIONAL 10% OFF</p>
        <p className="py-2 text-center">12 HOURS LEFT</p>
        <p className="bg-gray-800 text-gray-200 py-2 text-center">BOOK NOW AND SAFE</p>
      <form>
        <div className="flex flex-col">
            <label >Destination</label>
            <select className="border py-2 px-2 cursor-pointer">
                <option >Ayodhya</option>
                <option >Lucknow</option>
                <option >Lakimpur</option>
                <option >Kolkata</option>
                <option >Mumbai</option>
                <option >Goa</option>
                <option >Delhi</option>
                <option >Bihar</option>
                <option >Dewaria</option>
                <option >Selampur</option>
                <option >Channi</option>
                <option >Rajishthan</option>
                <option >Gujrat</option>
                <option >Benglur</option>
                <option >NOida</option>
            </select>
        </div>
        <div className="py-4 flex flex-col">
            <label className="pb-1" >Cheek-In</label>
            <input type="date" className="border py-2 px-2 cursor-pointer"/>
        </div>
        <div className=" flex flex-col">
            <label>Cheek-Out</label>
            <input type="date" className="border py-2 px-2 cursor-pointer"/>
        </div>
        <div className="flex justify-center items-center">
            <button className="border bg-gradient-to-r from-[#5651e5] to-[#709dff] w-full my-4 py-2 text-white
            font-semibold rounded-md cursor-pointer" >Rates & Availabilities</button>
        </div>
       
      </form>
      </div>
    </div>
  );
};

export default Sevice;
