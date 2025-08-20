import Link from "next/link"
import Slideshow from "@/components/Slideshow"

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative">
        <div className="rounded-xl overflow-hidden">
          <Slideshow />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/10 z-10 rounded-xl" />
        <div className="relative z-20 text-white py-12 md:py-16 px-4 md:px-6 max-w-3xl mx-auto text-center drop-shadow-lg">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Premium Event Production Services
          </h1>
          <p className="text-xl mb-8">
            Elevate your events with professional sound, lighting, and DJ services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 h-40 sm:h-48 relative rounded-lg overflow-hidden">
              <img 
                src="/sound-equipment.jpg" 
                alt="Sound Equipment" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sound Equipment</h3>
            <p className="text-gray-600 mb-4">
              Professional-grade speakers, mixers, and amplifiers for crystal-clear audio.
            </p>
            <Link href="/services#sound" className="text-blue-500 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 h-40 sm:h-48 relative rounded-lg overflow-hidden">
              <img 
                src="/DJ-Services.jpg" 
                alt="DJ Services" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">DJ Services</h3>
            <p className="text-gray-600 mb-4">Experienced DJs with customized playlists to keep your event lively.</p>
            <Link href="/services#dj" className="text-blue-500 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 h-40 sm:h-48 relative rounded-lg overflow-hidden">
              <img 
                src="/lighting.jpg" 
                alt="Lighting" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lighting</h3>
            <p className="text-gray-600 mb-4">Set the perfect mood with our professional lighting solutions.</p>
            <Link href="/services#lighting" className="text-blue-500 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="mb-4 h-40 sm:h-48 relative rounded-lg overflow-hidden">
              <img 
                src="/microphones.jpg" 
                alt="Microphones" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Microphones</h3>
            <p className="text-gray-600 mb-4">High-quality microphones for speeches, performances, and conferences.</p>
            <Link href="/services#microphones" className="text-blue-500 hover:text-blue-700 font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white rounded-xl p-6 md:p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to make your event unforgettable?
        </h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Contact us today to discuss how we can help bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg inline-block transition duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  )
}
