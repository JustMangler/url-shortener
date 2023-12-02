import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { IoWarning } from "react-icons/io5";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import RedirectButton from "@/components/button";
import { Button } from "@nextui-org/react";

export const getLongURL = async ({ slug }: { slug: string }) => {
  const url = `http://localhost:4000/api/${slug}`;
  const query = await fetch(url, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (query.status === 200) {
    const resp = await query.json();
    return { props: { url: resp.long_url } };
  }
  return { notFound: true };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const props = await getLongURL(params);
  return (
    <Layout color={true} links={false}>
      {props.props?.url ? (
        <div className="flex flex-col absolute top-0 w-screen h-screen mx-auto justify-center items-center gap-5">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400">
            https://ezurl.link/{params.slug}
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold">Redirects to:</h1>
          <h1 className="text-3xl md:text-4xl font-bold text-orange-400 pb-10">
            {props.props.url}...
          </h1>

          <div className="flex w-full max-w-4xl justify-center">
            <RedirectButton
              className="rounded-xl border-2 px-4 py-3 font-bold text-3xl"
              secs={5}
              link={props.props.url}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col fixed w-screen h-screen justify-center items-center gap-5">
          <IoWarning className="text-9xl text-orange-600" />
          <h1 className="text-4xl font-bold">404 Not Found</h1>
          <h1>Check to make sure you spelled the link correct.</h1>
        </div>
      )}
    </Layout>
  );
}
