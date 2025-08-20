import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <p className="text-center text-gray-600">
        Get in touch with us for your next event. We&apos;re here to help make it unforgettable!
      </p>
      <ContactForm />

      <div className="mt-12 p-8 bg-gray-100 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6">Direct Contact Information</h2>
        <div className="flex flex-col items-center justify-center">
          <p className="mb-4 text-gray-600">Prefer to call? Reach us directly at:</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium text-lg text-gray-900 font-bold">082 650 9344</span>
            </div>
            <div className="flex items-center justify-center px-6 py-3 bg-white rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium text-lg text-gray-900 font-bold">062 008 0319</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center">Our team is available Monday to Friday, 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  )
}
