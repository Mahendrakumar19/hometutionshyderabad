import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Personalized Learning for Academic Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Expert tutors connecting with students across Hyderabad to deliver customized education and foster holistic development.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/917498246765?text=Hi%2C%20I%20am%20interested%20in%20your%20tuition%20services"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Free Demo
                </a>
                <Link href="/about" className="btn-primary border-2 border-white">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="w-full h-80 relative hidden md:block">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Expert Tutors</h3>
              <p className="text-gray-600">
                Experienced and friendly tutors dedicated to creating a positive learning environment and tailoring lessons to individual needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                Customized lessons designed for each student's unique learning style and academic goals to ensure maximum effectiveness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Our students consistently achieve academic excellence with improved grades and increased confidence in their studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">5000+</div>
              <p className="text-xl text-gray-300">Expert Tutors Across Hyderabad</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl text-gray-300">Parent Satisfaction Rating</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <p className="text-xl text-gray-300">Students Successfully Guided</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-l-4 border-amber-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Mathematics</h3>
              <p className="text-gray-600">
                Building strong foundation in numeracy, problem-solving, and analytical skills across all class levels.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Science</h3>
              <p className="text-gray-600">
                Comprehensive science education covering physics, chemistry, and biology with practical understanding.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">English & Languages</h3>
              <p className="text-gray-600">
                Enhancing communication skills, vocabulary, and language proficiency in English and regional languages.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-6 py-4">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Exam Preparation</h3>
              <p className="text-gray-600">
                Specialized coaching for board exams, competitive tests, and entrance examinations with proven success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To become the most trusted platform for expert home tutoring and academic success, empowering every student to reach their full potential.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To empower students with personalized learning experiences, nurturing academic excellence and holistic development through dedicated educators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Child's Education?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a dedicated home tutor for your child and experience personalized learning like never before.
          </p>
          <a
            href="https://wa.me/917498246765?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20home%20tutor%20for%20my%20child"
            className="btn-secondary inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
}
