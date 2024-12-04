import Image from 'next/image'

export function About() {
  return (
    <section className="py-12 sm:py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">About Wapung Farm</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              At Wapung Farm, we're passionate about delivering the freshest, most delicious organic produce straight from our fields to your table. Our sustainable farming practices ensure that every fruit and vegetable is grown with care for both your health and the environment.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              With over 50 years of farming experience, we take pride in our commitment to quality, flavor, and the well-being of our community. Experience the difference of truly farm-fresh produce with Wapung Farm.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Wapung Farm landscape"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

