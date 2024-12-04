export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The produce from Wapung Farm is simply outstanding. I can taste the difference in every bite!',
    },
    {
      name: 'Michael Chen',
      text: 'As a chef, I rely on high-quality ingredients. Wapung Farm never disappoints with their fresh and flavorful products.',
    },
    {
      name: 'Emily Davis',
      text: "I love knowing exactly where my food comes from. Wapung Farm's transparency and quality are unmatched.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-8 sm:mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md">
              <p className="text-gray-700 mb-4 text-base sm:text-lg">
                "{testimonial.text}"
              </p>
              <p className="text-green-600 font-semibold text-sm sm:text-base">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
