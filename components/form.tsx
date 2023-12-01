"use client";

import { useState } from "react";
import { FaLock, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";

export default function Form() {
  const [formData, setFormData] = useState({
    long: "",
    short: "",
  });

  const handleInput = (e: any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const submitForm = async (e: any) => {
    // We don't want the page to refresh
    e.preventDefault();
    console.log(
      JSON.stringify({
        long_url: formData.long,
        short_url: formData.short,
      })
    );

    // Turn our formData state into data we can use with a form submissio
    // POST the data to the URL of the form
    await fetch(`http://localhost:4000/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        long_url: formData.long,
        short_url: formData.short,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFormData({
          long: "",
          short: "",
        });
      });
  };

  return (
    <div>
      <div className="flex max-w-5xl bg-white shadow-md rounded-3xl mx-auto">
        <form method="POST" className="w-full p-8" onSubmit={submitForm}>
          <div className="flex flex-col md:items-left mb-6 ">
            <h1 className="text-left font-bold text-3xl pb-3">
              Shorten a long URL
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1 md:col-span-5 ml-2 mb-2 mr-2">
                <label className="block text-lg font-bold text-left pb-2">
                  Paste a long link
                </label>
                <input
                  className="appearance-none border-2 border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-sky-600"
                  id="inline-full-name"
                  type="text"
                  name="long"
                  placeholder="Example: https://ezurl.link/super-long-link"
                  onChange={handleInput}
                  value={formData.long}
                />
              </div>
              <div className="col-span-1 md:col-span-2 pt-2 ml-2 mb-2">
                <label className="block text-lg font-bold text-left  pb-2">
                  Domain
                </label>

                <div className="flex flex-row ">
                  <div
                    className="flex flex-row text-left items-center justify-between appearance-none border-2 border-gray-400 w-full rounded-lg py-2 px-3 text-gray-400 focus:outline-none bg-gray-100 focus:border-sky-600"
                    id="inline-full-name"
                  >
                    ezurl.link
                    <FaLock />
                  </div>
                  <div className="flex items-center pl-2">
                    <label>/</label>
                  </div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-3 ml-2 pt-2 mb-2 mr-2">
                <label className="block text-lg font-bold text-left pb-2">
                  Customize your link{" "}
                  <span className="font-normal">{"(optional)"}</span>
                </label>

                <input
                  className="appearance-none border-2 border-gray-400 rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-sky-600"
                  id="inline-full-name"
                  type="text"
                  name="short"
                  placeholder="example: make-money"
                  onChange={handleInput}
                  value={formData.short}
                />
              </div>
              <div className="flex flex-row col-span-1 md:col-span-5 ml-2 pt-2 mb-2 mr-2 gap-4 align-left">
                <div className="flex flex-col">
                  <label className="block text-lg font-bold text-left pb-2">
                    Time to redirect
                  </label>

                  <div
                    className="flex flex-row text-left items-center justify-between appearance-none border-2 border-gray-400 w-full rounded-lg py-2 px-3 text-gray-400 focus:outline-none bg-gray-100 focus:border-sky-600"
                    id="inline-full-name"
                  >
                    5 seconds
                    <FaLock />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <label className="block text-lg font-bold text-left pb-2">
                    Manual Redirect?
                  </label>

                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    checked
                    disabled
                  />
                </div>
              </div>
              <div className="flex flex-row col-span-1 md:col-span-5 ml-2 pt-3 mb-2 mr-2 gap-4 align-left">
                <button
                  className="shadow bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white text-xl py-4 px-6 rounded text-center"
                  type="submit"
                >
                  Try it now &rarr;
                </button>
                <Link href="/sign-up">
                  <button
                    className="shadow bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white text-xl py-4 px-6 rounded text-center"
                    type="button"
                  >
                    Sign up and start earning &rarr;
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold">
            No credit card required. Just sign up today:
          </h1>
          <div className="flex flex-row gap-6 justify-center mx-auto pt-2">
            <div className="flex flex-row justify-center gap-2">
              <FaRegCheckCircle class="text-2xl text-sky-600" />
              Short links
            </div>
            <div className="flex flex-row justify-center gap-2">
              <FaRegCheckCircle class="text-2xl text-sky-600" />
              Get paid
            </div>
            <div className="flex flex-row justify-center gap-2">
              <FaRegCheckCircle class="text-2xl text-sky-600" />
              Free
            </div>
          </div>

          {/* <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
}
