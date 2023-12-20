"use client";

import Layout from "@/components/layout";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [annual, setAnnual] = useState(true);
  return (
    <Layout links>
      <div className="flex flex-col text-center items-center gap-5">
        <h1 className="mt-10 text-5xl font-extrabold">Pricing for you</h1>
        <h2 className="text-2xl text-gray-500 font-light">
          Find a plan that best suits you
        </h2>
      </div>
      <div className="flex flex-col mt-10 bg-main w-screen items-center">
        <div className="max-w-6xl w-full gap-2 ml-4 pl-4 mt-8 mb-4">
          <text className="pr-2">Monthly </text>
          <Switch
            className="pr-0"
            onClick={() => setAnnual(!annual)}
            isSelected={annual}
          />
          <text>Yearly</text>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mt-4 mx-8 gap-4 pb-12">
          <Card>
            <CardHeader className="flex gap-3 text-center">
              <text className="w-full font-bold">Free</text>
            </CardHeader>
            <Divider />
            <CardBody>
              <h1 className="text-5xl font-extrabold text-slate-700 text-center">
                $0<span className="text-2xl">/month</span>
              </h1>
              <div className="h-8"></div>
              <p className="font-bold my-6 px-6 ">
                <text>Includes:</text>
              </p>
              <ul className="list-disc text-gray-500 font-normal mb-6 px-6">
                <li>$3 Sign Up Bonus</li>
                <li>Unlimited Links</li>
                <li>Customize Your Links</li>
                <li>Expiration: 10 days</li>
              </ul>
              <Link href="/sign-up">
                <button className="rounded-xl w-full border-2 py-2 hover:bg-gray-100">
                  Get Started
                </button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="flex gap-3 text-center">
              <text className="w-full font-bold">Casual</text>
            </CardHeader>
            <Divider />
            <CardBody>
              <h1 className="text-5xl font-extrabold text-slate-700 text-center">
                {annual ? "$10" : "$12"}
                <span className="text-2xl">/month</span>
              </h1>
              <div className="h-8 text-center font-light">
                <text className={annual ? "" : "hidden"}>
                  (annual charge of $120)
                </text>
              </div>
              <p className="font-bold my-6 px-6">
                <text>Everything in free, plus:</text>
              </p>
              <ul className="list-disc text-gray-500 font-normal mb-6 px-6">
                <li>Customizable Dashboard</li>
                <li>Automatic Payments</li>
                <li>Customize Your Domain</li>
                <li>Never Expire</li>
              </ul>
              <Link href="/sign-up">
                <button className="rounded-xl w-full border-2 py-2 hover:bg-gray-100">
                  Get Started
                </button>
              </Link>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className="flex gap-3 text-center">
              <text className="w-full font-bold">Custom</text>
            </CardHeader>
            <Divider />
            <CardBody>
              <h1 className="text-5xl font-extrabold text-slate-700 text-center">
                *<span className="text-2xl">/month</span>
              </h1>
              <div className="h-8"></div>
              <p className="font-bold my-6 px-6">
                <text>Customize your own plan:</text>
              </p>
              <ul className="list-disc text-gray-500 font-normal mb-6 px-6">
                <li>Year of data</li>
                <li>Support 24/7</li>
                <li>Free Domain</li>
                <li>Access to API</li>
              </ul>
              <Link href="/sign-up">
                <button className="rounded-xl w-full border-2 py-2 hover:bg-gray-100">
                  Get Started
                </button>
              </Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
