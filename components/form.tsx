export default function Form() {
  return (
    <div>
      <div className="flex max-w-3xl  bg-white shadow-md rounded-3xl mx-auto">
        <form className="w-full p-8">
          <div className="flex flex-col md:items-left mb-6">
            <h1 className="text-left font-bold text-3xl pb-3">
              Shorten a long URL
            </h1>
            <label className="block text-lg font-bold text-left pb-2">
              Paste a long link
            </label>
            <input
              className="appearance-none border-2 border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="Example: https://ezurl.link/super-long-link"
            />
            <label className="block text-lg font-bold text-left pt-6 pb-2">
              Customize your link{" "}
              <span className="font-normal">{"(optional)"}</span>
            </label>
            <div className="flex ">
              <div
                className="text-left appearance-none border-2 border-gray-400 rounded w-1/3 py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
              >
                ezurl.link
              </div>
              <input
                className="appearance-none border-2 border-gray-400 rounded w-2/3 py-2 px-3 text-gray-700 focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                placeholder="Example: https://ezurl.link/super-long-link"
              />
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
