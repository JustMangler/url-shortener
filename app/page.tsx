import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col font-metropolis text-center h-screen bg-main pt-10 gap-3">
        <h1 className="hero text-6xl font-extrabold">
          Make <span className="text-green-600">money</span> off short links
          &#129297;
        </h1>
        <h2 className="text-3xl text-slate-500">
          Create a short link, share it with other people, watch the money roll
          in. <br className="md:hidden lg:block" />
          Track your statistics and cash out when you&apos;re ready!
        </h2>
      </div>
    </Layout>
  );
}
