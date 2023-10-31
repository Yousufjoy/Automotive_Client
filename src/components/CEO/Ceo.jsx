import avatar from "../../assets/imgs/avatar.png";

const Ceo = () => {
  return (
    <div>
      <div className="bg-gray-100 py-16 dark:bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-[#F7A034] tracking-wide text-5xl font-medium">
              Here's what our CEO has to say
            </h2>
          </div>
          <div className="mt-10">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="flex items-center justify-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={avatar}
                  alt="Testimonial avatar"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                    John Doe
                  </p>
                  <p className="text-gray-500">CEO, AutoConnect</p>
                </div>
              </div>
              <p className="dark:text-gray-400 text-lg text-center text-gray-800">
                "Success is not just about making the right decision, but also
                ensuring that decision makes a positive impact. It's about
                leading with purpose, inspiring innovation, and fostering a
                culture of growth and excellence. Together, we can not only
                achieve our goals but also create a legacy that transcends
                generations"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
