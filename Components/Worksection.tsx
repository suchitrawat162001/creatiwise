import Image from "next/image"

import works1 from "../public/works img 1.png"
import works2 from "../public/works img 2.png"
import works3 from "../public/work img 3.png"


export default function WorksSection() {
  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
            </svg>

            <h2 className="text-3xl md:text-4xl font-bold ml-3">Works</h2>
          </div>
          <button className="text-gray-400 hover:text-white text-sm transition-colors">View all</button>
        </div>


        <div className="space-y-8">

          <div className=" rounded-2xl overflow-hidden  p-8 gradiant-bg">
            <div className="flex flex-col lg:flex-row">

              <div className="lg:w-1/2 relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={works1}
                  alt="Analysis Application - Orange envelope design"
                  fill
                  className="object-cover"
                />
              </div>


              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Analysis Application</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    With user-centered approach, the goals was to create an intuitive interface for enhanced financial
                    intelligence.
                  </p>


                  <div className="flex gap-3 mb-8">
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">Figma</span>
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">UX</span>
                  </div>
                </div>


                <button
                  className="self-start rounded-[100px] px-[32px] py-[16px]  text-black hover:bg-gray-800 bg-white"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>

        </div>
        <div className="space-y-8 my-10">

          <div className=" rounded-2xl overflow-hidden  p-8 gradiant-bg">
            <div className="flex flex-col lg:flex-row">

              <div className="lg:w-1/2 relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={works2}
                  alt="Analysis Application - Orange envelope design"
                  fill
                  className="object-cover"
                />
              </div>


              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Fortknox Application</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                  </p>


                  <div className="flex gap-3 mb-8">
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">MOBILE</span>
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">WEB</span>
                  </div>
                </div>


                <button
                  className="self-start rounded-[100px] px-[32px] py-[16px]  text-black hover:bg-gray-800 bg-white"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="space-y-8">

          <div className=" rounded-2xl overflow-hidden  p-8 gradiant-bg">
            <div className="flex flex-col lg:flex-row">

              <div className="lg:w-1/2 relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                <Image
                  src={works3}
                  alt="Analysis Application - Orange envelope design"
                  fill
                  className="object-cover"
                />
              </div>


              <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Zenocide Application</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.
                  </p>


                  <div className="flex gap-3 mb-8">
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">APP</span>
                    <span className="px-4 py-2 border-2 border-white rounded-full text-xs font-medium">WEB</span>
                  </div>
                </div>


                <button
                  className="self-start rounded-[100px] px-[32px] py-[16px]  text-black hover:bg-gray-800 bg-white"
                >
                  View Case Study
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
