const News = () => {
  return (
    <div>
      <div className="bg-white dark:bg-zinc-800 py-16 my-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#F7A034] tracking-wide text-5xl font-medium ">
              Latest News
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-white">
              Stay updated with the latest industry insights
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Tesla's Groundbreaking Innovation in Sustainable Battery
                Technology
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Electric vehicle pioneer Tesla Inc. made headlines this week
                with the announcement of a revolutionary breakthrough in
                sustainable battery technology.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                BMW's Vision for the Future of Mobility with iX Series
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                German automotive giant BMW captured attention with the launch
                of its visionary iX series, representing a bold step towards a
                more sustainable and interconnected future.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Toyota's Breakthrough in Hydrogen Fuel Cell Technology
              </h3>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                Japanese automobile powerhouse Toyota Motor Corporation unveiled
                a major breakthrough in hydrogen fuel cell technology with its
                latest project, HydroGenius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
