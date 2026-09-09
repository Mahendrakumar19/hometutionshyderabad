import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-200">
            Elevating Education through Personalized Learning Journeys
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="text-gray-600 text-lg mb-4">
                Home Tutions Hyderabad is a professional platform dedicated to connecting expert tutors with students seeking personalized education. We understand that every student is unique, and their learning needs require tailored approaches.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                With over 5000 experienced tutors across Hyderabad, we provide comprehensive educational support across multiple subjects and class levels. Our mission is to make quality education accessible and effective for every student.
              </p>
              <p className="text-gray-600 text-lg">
                We are committed to fostering academic excellence, building confidence, and nurturing the holistic development of every student we serve.
              </p>
            </div>
            <div className="w-full h-96 relative">
              <Image
                src="/logo.jpg"
                alt="Home Tutions Hyderabad"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <p className="section-subtitle text-center">
            Friendly, dedicated tutors fostering personalized learning and academic success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Expert Tutors</h3>
              <p className="text-gray-600">Experienced and vetted tutors dedicated to student success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Classes at your convenient time and location.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Personalized Approach</h3>
              <p className="text-gray-600">Tailored lessons based on individual learning needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent improvement in grades and academic confidence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Parent Communication</h3>
              <p className="text-gray-600">Regular updates on student progress and performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="text-3xl mb-3">✓</div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Affordable Pricing</h3>
              <p className="text-gray-600">Quality education at competitive and transparent prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-lg text-gray-300">Parent Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <p className="text-lg text-gray-300">Expert Tutors</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-lg text-gray-300">Students Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-900">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the most trusted platform for expert home tutoring and academic success in Hyderabad and beyond, empowering every student to reach their full potential through quality education.
              </p>
            </div>
            <div className="bg-amber-50 p-8 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower students with personalized learning experiences, nurturing academic excellence and holistic development through dedicated, experienced educators who transform educational journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Join Our Learning Community</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with expert tutors and experience the difference personalized education can make in your child's academic journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/917498246765?text=Hi%2C%20I%20am%20interested%20in%20your%20tuition%20services"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Free Demo
            </a>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
