"use client"

import { useState } from "react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      id: 0,
      question: "What is your design process?",
      answer:
        "My design process typically involves four main phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs in the design phase. I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
    },
    {
      id: 1,
      question: "What tools and software do you use for UX design?",
      answer:
        "I primarily use Figma for design and prototyping, along with various research and testing tools to ensure the best user experience.",
    },
    {
      id: 2,
      question: "How do you measure the success of your UX designs?",
      answer:
        "I measure success through user testing, analytics, conversion rates, and feedback from stakeholders to ensure the design meets both user needs and business objectives.",
    },
  ]

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center mb-12">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold ml-3">Frequently asked questions</h2>
        </div>


        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-800 pb-6">
              <button onClick={() => toggleFAQ(faq.id)} className="w-full text-left focus:outline-none group">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 group-hover:text-gray-300 transition-colors">
                  {faq.question}
                </h3>
              </button>

              {openFAQ === faq.id && (
                <div className="mt-4">
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
