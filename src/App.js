import { useRef } from "react";
import emailjs from "@emailjs/browser";
import frontpg from "../src/frontpg.jpeg";
import "./App.css";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
   alert("Message sent successfully!")
  

    emailjs
      .sendForm(
        "service_taxiss2",
        "template_1vrhv1f",
        form.current,
        "6T9-xgsX31GZUDbjL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <div
      className="
  
    bg-gradient-to-r
    from-blue-500
    via-red-500
    to-yellow-500
    background-animate
  "
    >
      <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start flex-col md:mr-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                The Kleinbergs Wedding Stream!
              </h1>
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                When: April 28th 2023
              </h1>
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                Start Time: 630pm CST
              </h1>
              <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                How: Register below to catch this exciting moment to watch Live!
              </h1>
              <img
                src={frontpg}
                alt="frontpg"
                className=" rounded-full w-48 cursor-pointer py-4 "
              />
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col justify-center items-center my-8"
              >
                <label className="my-4 text-2xl text-white">Name :</label>
                <input
                  className="text-black rounded"
                  id="name"
                  type="text"
                  name="user_name"
                  placeholder="Name..."
                />

                <label className=" my-4 text-2xl text-white">Email :</label>
                <input
                  className=" text-black rounded"
                  id="email"
                  type="email"
                  placeholder="Email..."
                  name="user_email"
                />

                <label className="text-2xl my-4 text-white">Message :</label>
                <input
                  className="text-black rounded h-[100px] flex align-items: fle"
                  id="letter"
                  placeholder="Letter to us?!"
                  type="text"
                  name="message"
                />
                <button
                  type="submit"
                  className="bg-[#2952e3] my-2 py-2 px-7 text-white mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                  RSVP NOW!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
