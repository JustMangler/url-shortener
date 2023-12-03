"use client";

import { FaLock, FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { Formik, Form as FForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Tooltip } from "@nextui-org/react";

export default function Form() {
  const submitForm = async (e: any) => {
    // We don't want the page to refresh
    console.log(
      JSON.stringify({
        long_url: e.long,
        short_url: e.short,
      })
    );

    // Turn our formData state into data we can use with a form submissio
    // POST the data to the URL of the form
    const resp = await fetch(
      `https://urlshortener.gigalixirapp.com/api/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          long_url: e.long,
          short_url: e.short,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const re =
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    long: Yup.string()
      .required("The URL field is required.")
      .matches(re, "Not a valid URL"),
    short: Yup.string().max(15, "Your alias is too long."),
  });

  return (
    <div>
      <Formik
        initialValues={{
          long: "",
          short: "",
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={(values, { resetForm }) => {
          // same shape as initial values
          console.log(values);
          submitForm(values);
          resetForm();
        }}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ errors, touched }) => (
          <div className="flex max-w-5xl bg-white shadow-md rounded-3xl mx-auto">
            <FForm className="w-full p-8">
              <div className="flex flex-col md:items-left mb-6 ">
                <h1 className="text-left font-bold text-3xl pb-3">
                  Shorten a long URL
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="grid col-span-1 md:col-span-5 ml-2 mb-2 mr-2">
                    <label className="block text-lg font-bold text-left pb-2">
                      Paste a long link
                    </label>
                    <Field
                      type="text"
                      placeholder="Example: https://ezurl.link/super-long-link"
                      name="long"
                      className="appearance-none border-2 border-gray-400 rounded-lg font-light w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-sky-600"
                    />
                    <ErrorMessage name="long" />
                  </div>

                  <div className="col-span-1 md:col-span-2 pt-2 ml-2 mb-2">
                    <label className="block text-lg font-bold text-left  pb-2">
                      Domain
                    </label>

                    <div className="flex flex-row">
                      <Tooltip
                        content="Change to a custom domain"
                        delay={0}
                        closeDelay={0}
                        color="primary"
                        motionProps={{
                          variants: {
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: 0.1,
                                ease: "easeIn",
                              },
                            },
                            enter: {
                              opacity: 1,
                              transition: {
                                duration: 0.15,
                                ease: "easeOut",
                              },
                            },
                          },
                        }}
                      >
                        <div
                          className="cursor-not-allowed flex flex-row text-left items-center font-light justify-between appearance-none border-2 border-gray-400 w-full rounded-lg py-2 px-3 text-gray-400 focus:outline-none bg-gray-100 focus:border-sky-600"
                          id="inline-full-name"
                        >
                          ezurl.link
                          <FaLock />
                        </div>
                      </Tooltip>
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

                    <Field
                      className="appearance-none border-2 border-gray-400 rounded-lg w-full font-light py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-sky-600"
                      id="inline-full-name"
                      type="text"
                      name="short"
                      placeholder="example: make-money"
                    />
                    <ErrorMessage name="short" />
                  </div>
                  <div className="flex flex-row col-span-1 md:col-span-5 ml-2 pt-2 mb-2 mr-2 gap-4 align-left">
                    <div className="flex flex-col">
                      <label className="block text-lg font-bold text-left pb-2">
                        Time to redirect
                      </label>
                      <Tooltip
                        content="Seconds before users are redirected"
                        delay={0}
                        closeDelay={0}
                        color="primary"
                        motionProps={{
                          variants: {
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: 0.1,
                                ease: "easeIn",
                              },
                            },
                            enter: {
                              opacity: 1,
                              transition: {
                                duration: 0.15,
                                ease: "easeOut",
                              },
                            },
                          },
                        }}
                      >
                        <div
                          className="cursor-not-allowed flex flex-row text-left items-center font-light justify-between appearance-none border-2 border-gray-400 w-full rounded-lg py-2 px-3 text-gray-400 focus:outline-none bg-gray-100 focus:border-sky-600"
                          id="inline-full-name"
                        >
                          5 seconds
                          <FaLock />
                        </div>
                      </Tooltip>
                    </div>

                    <div className="flex flex-col items-center">
                      <label className="block text-lg font-bold text-left pb-2">
                        Manual Redirect?
                      </label>
                      <Tooltip
                        content="Have users click a button rather than a redirect"
                        delay={0}
                        closeDelay={0}
                        color="primary"
                        motionProps={{
                          variants: {
                            exit: {
                              opacity: 0,
                              transition: {
                                duration: 0.1,
                                ease: "easeIn",
                              },
                            },
                            enter: {
                              opacity: 1,
                              transition: {
                                duration: 0.15,
                                ease: "easeOut",
                              },
                            },
                          },
                        }}
                      >
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="cursor-not-allowed w-10 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          checked
                          disabled
                        />
                      </Tooltip>
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
                  <FaRegCheckCircle className="text-2xl text-sky-600" />
                  Short links
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <FaRegCheckCircle className="text-2xl text-sky-600" />
                  Get paid
                </div>
                <div className="flex flex-row justify-center gap-2">
                  <FaRegCheckCircle className="text-2xl text-sky-600" />
                  Free
                </div>
              </div>
            </FForm>
          </div>
        )}
      </Formik>
    </div>
  );
}
