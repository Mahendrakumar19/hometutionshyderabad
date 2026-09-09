'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hello! I would like to get more information about your tuition services.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917498246765?text=${encodedMessage}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200">
            Get in touch with us. We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Call Us</h3>
              <a href="tel:7498246765" className="text-lg text-gray-600 hover:text-blue-900 transition">
                7498246765
              </a>
              <p className="text-gray-500 mt-2">Mon-Sat, 9 AM - 6 PM</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Email Us</h3>
              <a href="mailto:hometutionsh@gmail.com" className="text-lg text-gray-600 hover:text-blue-900 transition">
                hometutionsh@gmail.com
              </a>
              <p className="text-gray-500 mt-2">We'll respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">Location</h3>
              <p className="text-lg text-gray-600">Hyderabad, India</p>
              <p className="text-gray-500 mt-2">Serving all areas across Hyderabad</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="section-title">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-900 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message via WhatsApp
                </button>

                {submitted && (
                  <p className="text-green-600 font-semibold text-center">
                    ✓ Message sent successfully!
                  </p>
                )}
              </form>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Quick Contact</h3>
                <p className="text-gray-600 mb-6">
                  Choose your preferred way to connect with us:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/917498246765?text=Hi%2C%20I%20am%20interested%20in%20your%20tuition%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition"
                  >
                    <span className="text-3xl">💬</span>
                    <div>
                      <h4 className="font-semibold text-green-900">WhatsApp</h4>
                      <p className="text-sm text-green-700">7498246765</p>
                    </div>
                  </a>

                  <a
                    href="tel:7498246765"
                    className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
                  >
                    <span className="text-3xl">📞</span>
                    <div>
                      <h4 className="font-semibold text-blue-900">Phone Call</h4>
                      <p className="text-sm text-blue-700">7498246765</p>
                    </div>
                  </a>

                  <a
                    href="mailto:hometutionsh@gmail.com"
                    className="flex items-center gap-4 p-4 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition"
                  >
                    <span className="text-3xl">📧</span>
                    <div>
                      <h4 className="font-semibold text-purple-900">Email</h4>
                      <p className="text-sm text-purple-700">hometutionsh@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://www.instagram.com/home.tutions_hyderabad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-pink-50 border border-pink-200 rounded-lg hover:bg-pink-100 transition"
                  >
                    <span className="text-3xl">📷</span>
                    <div>
                      <h4 className="font-semibold text-pink-900">Instagram</h4>
                      <p className="text-sm text-pink-700">@home.tutions_hyderabad</p>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61593750491604"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg hover:bg-indigo-100 transition"
                  >
                    <span className="text-3xl">f</span>
                    <div>
                      <h4 className="font-semibold text-indigo-900">Facebook</h4>
                      <p className="text-sm text-indigo-700">Home Tutions Hyderabad</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Working Hours</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>Monday - Saturday: 9 AM - 6 PM</li>
                  <li>Sunday: 10 AM - 4 PM</li>
                  <li>Holidays: By appointment only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">How do I book a tutor?</h3>
              <p className="text-gray-600">
                Simply contact us via WhatsApp, phone, or email with your requirements, and we'll match you with the perfect tutor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">What are your rates?</h3>
              <p className="text-gray-600">
                Our rates vary based on the tutor's experience and subject. Contact us for a free consultation and personalized quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Do you offer demo classes?</h3>
              <p className="text-gray-600">
                Yes! We offer a free demo class so you can meet the tutor and discuss your child's learning goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Can I change my tutor?</h3>
              <p className="text-gray-600">
                Absolutely! If you're not satisfied, we'll match you with another tutor at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
