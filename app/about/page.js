// app/about/page.js
'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { 
  Target, BookOpen, Users, Lightbulb, TrendingUp, 
  Award, Globe, CheckCircle, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const objectives = [
    "Enhance scientific literacy and digital skills among students in rural schools and community tuition centers",
    "Train local educators and researchers to create simple, engaging, and context-relevant STEM pedagogies",
    "Establish a replicable 'Hub-and-Spoke' model rooted in local community ecosystems",
    "Position Kuthambakkam as a model STEM Education Village"
  ];

  const urgencyPoints = [
    {
      title: "Bridging the Learning Divide",
      desc: "Tailored STEM tools help rural children grasp concepts faster, with curiosity and relevance"
    },
    {
      title: "Future-Readiness",
      desc: "STEM skills—coding, robotics, problem-solving—are essential for 21st-century livelihoods"
    },
    {
      title: "Breaking the Poverty Trap",
      desc: "Quality education opens doors to scholarships, innovation, and opportunity"
    },
    {
      title: "Local Role Models",
      desc: "Young innovators from the village inspire community-wide transformation"
    },
    {
      title: "Building Community Capacity",
      desc: "Local youth are trained as educators and researchers—creating sustainable knowledge ecosystems"
    }
  ];

  const operationalFramework = [
    {
      component: "Hub School",
      description: "Kuthambakkam Higher Secondary School: training, testing, and coordination center"
    },
    {
      component: "Spoke Schools",
      description: "Four nearby government primary schools receiving resources and training"
    },
    {
      component: "Research & Pedagogy Unit",
      description: "Local STEM team to create context-specific content (Tamil + English)"
    },
    {
      component: "Mobile STEM Lab",
      description: "Custom van for community outreach, science fairs, and demonstrations"
    }
  ];

  const humanResources = [
    { role: "STEM Program Coordinator", number: 1, monthly: "₹40,000", annual: "₹4,80,000" },
    { role: "STEM Researchers", number: 1, monthly: "₹30,000", annual: "₹3,60,000" },
    { role: "Teaching Supporters", number: 4, monthly: "₹20,000", annual: "₹9,60,000" },
    { role: "Drivers (Part-time)", number: 2, monthly: "₹15,000", annual: "₹3,60,000" },
    { role: "Technical Support", number: 2, monthly: "₹15,000", annual: "₹3,60,000" },
    { role: "Admin/Accountant", number: 1, monthly: "₹25,000", annual: "₹3,00,000" }
  ];

  const infrastructure = [
    { item: "STEM Kits", unitCost: "₹5,00,000", quantity: 6, total: "₹30,00,000" },
    { item: "Tablets/Laptops", unitCost: "₹46,000", quantity: 4, total: "₹1,84,000" },
    { item: "Smart TVs/Projectors", unitCost: "₹1,20,000", quantity: 5, total: "₹6,00,000" },
    { item: "Mobile Van Customization", unitCost: "₹13,00,000", quantity: 2, total: "₹26,00,000" },
    { item: "Internet & Cloud", unitCost: "₹5,000/month", quantity: 12, total: "₹60,000" },
    { item: "Tools, Repairs", unitCost: "–", quantity: "–", total: "₹75,000" }
  ];

  const budgetSummary = [
    { category: "Human Resources", cost: "₹28,20,000" },
    { category: "Infrastructure & Equipment", cost: "₹65,19,000" },
    { category: "Training & Content", cost: "₹4,80,000" },
    { category: "Operations", cost: "₹3,60,000" },
    { category: "Contingency", cost: "₹3,87,960" }
  ];

  const sdgGoals = [
    { number: 1, name: "No Poverty", contribution: "Empowers students with future-ready skills, leading to long-term economic mobility" },
    { number: 4, name: "Quality Education", contribution: "Provides contextual, engaging STEM education in rural areas" },
    { number: 5, name: "Gender Equality", contribution: "Ensures participation of girls in STEM programs" },
    { number: 8, name: "Decent Work & Economic Growth", contribution: "Develops job-ready skills in digital tools and coding" },
    { number: 9, name: "Industry, Innovation & Infrastructure", contribution: "Establishes STEM labs and mobile science vans" },
    { number: 10, name: "Reduced Inequalities", contribution: "Targets marginalized children with poor access to education" },
    { number: 11, name: "Sustainable Cities & Communities", contribution: "Builds knowledge-based rural ecosystems" },
    { number: 13, name: "Climate Action", contribution: "Promotes climate literacy and sustainable innovation" }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="py-8 md:py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto">
              Building a robust, inclusive, and scalable education support system for children 
              from poor and marginalized families
            </p>
          </div>
        </div>

        {/* Vision */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-green-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To build a robust, inclusive, and scalable education support system for children from 
              poor and marginalized families by integrating <strong>STEM-based learning</strong> through 
              modern tools, skilled educators, community ownership, and digital infrastructure.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Our Objectives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg flex gap-4">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why This is Urgent */}
        <section className="bg-green-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
                Why This is Urgent & Transformative
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {urgencyPoints.map((point, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                  <Lightbulb className="text-green-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
                  <p className="text-gray-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operational Framework */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Operational Framework
            </h2>
            <p className="text-gray-600 text-lg">Hub-and-Spoke Model for Scalable Impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {operationalFramework.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-600 mb-3">{item.component}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Tables - Expandable */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Project Budget & Resources
            </h2>
          </div>

          {/* Human Resources */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('human')}
              className="w-full bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Users className="text-green-600" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Human Resources (Annual)</h3>
              </div>
              {expandedSection === 'human' ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {expandedSection === 'human' && (
              <div className="bg-white mt-2 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Role</th>
                        <th className="px-4 py-3 text-center">Number</th>
                        <th className="px-4 py-3 text-right">Monthly</th>
                        <th className="px-4 py-3 text-right">Annual</th>
                      </tr>
                    </thead>
                    <tbody>
                      {humanResources.map((item, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">{item.role}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{item.number}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{item.monthly}</td>
                          <td className="px-4 py-3 text-right font-semibold text-green-600">{item.annual}</td>
                        </tr>
                      ))}
                      <tr className="bg-green-50 font-bold">
                        <td colSpan="3" className="px-4 py-3 text-gray-800">Total</td>
                        <td className="px-4 py-3 text-right text-green-600">₹28,20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Infrastructure */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('infrastructure')}
              className="w-full bg-white p-6 rounded-xl shadow-lg flex items-center justify-between hover:bg-gray-50 transition"
            >
              <div className="flex items-center gap-3">
                <Award className="text-green-600" size={28} />
                <h3 className="text-xl font-bold text-gray-800">Infrastructure & Equipment</h3>
              </div>
              {expandedSection === 'infrastructure' ? <ChevronUp /> : <ChevronDown />}
            </button>
            
            {expandedSection === 'infrastructure' && (
              <div className="bg-white mt-2 rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Item</th>
                        <th className="px-4 py-3 text-right">Unit Cost</th>
                        <th className="px-4 py-3 text-center">Quantity</th>
                        <th className="px-4 py-3 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {infrastructure.map((item, idx) => (
                        <tr key={idx} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-700">{item.item}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{item.unitCost}</td>
                          <td className="px-4 py-3 text-center text-gray-700">{item.quantity}</td>
                          <td className="px-4 py-3 text-right font-semibold text-green-600">{item.total}</td>
                        </tr>
                      ))}
                      <tr className="bg-green-50 font-bold">
                        <td colSpan="3" className="px-4 py-3 text-gray-800">Total</td>
                        <td className="px-4 py-3 text-right text-green-600">₹65,19,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Budget Summary Card */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Total Budget Summary (Year 1)</h3>
            <div className="space-y-3">
              {budgetSummary.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center bg-white/10 rounded-lg p-4">
                  <span className="font-medium">{item.category}</span>
                  <span className="text-xl font-bold">{item.cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center bg-white text-green-600 rounded-lg p-5 text-xl font-bold">
                <span>Total (Year 1)</span>
                <span>₹1,05,66,960</span>
              </div>
            </div>
            <p className="text-green-100 text-sm mt-6 text-center">
              *₹65.19 Lakhs are one-time infrastructure investments. Annual operational support needed: ₹40.47 Lakhs
            </p>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="bg-gradient-to-b from-green-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">Expected Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <BookOpen size={28} />
                  Educational Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>600+ rural children access engaging STEM content and tools</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Schools become active learning environments</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Youth gain real teaching and research experience</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Scientific thinking spreads across the community</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center gap-2">
                  <TrendingUp size={28} />
                  Social & Economic Outcomes
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Students access scholarships and higher education</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Families benefit from increased digital literacy</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Villages produce their own knowledge workers</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span>Community shifts from survival to innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UN SDG Alignment */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <Globe className="text-green-600 mx-auto mb-4" size={48} />
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              UN Sustainable Development Goals
            </h2>
            <p className="text-gray-600 text-lg">Our Commitment to Global Impact</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgGoals.map((goal, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {goal.number}
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm">{goal.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{goal.contribution}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Quote */}
        <section className="bg-green-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-6xl mb-6">💡</div>
            <blockquote className="text-2xl md:text-3xl font-bold italic mb-4">
              "When village children dream in code, build machines, and think like scientists—
              the future of rural India will be unstoppable."
            </blockquote>
            <p className="text-green-100 text-lg">
              Kuthambakkam: A Village of Regenerative Learning
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}