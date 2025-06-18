import Image from "next/image"
import works1 from "../public/works img 1.png"
import works2 from "../public/works img 2.png"
import works3 from "../public/work img 3.png"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "How UX works in web",
      date: "Nov 9, 2023",
      image: works1,
      tags: ["UX", "UI"],
    },
    {
      id: 2,
      title: "Case study - Analysis Application.",
      date: "Aug 18, 2023",
      image: works2,
      tags: ["DESIGN", "FIGMA"],
    },
    {
      id: 3,
      title: "3 ways to develop your skill",
      date: "Feb 16, 2023",
      image: works3,
      tags: ["FIGMA", "WEB"],
    },
  ]

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
            </svg>
            <h2 className="text-3xl md:text-4xl font-bold ml-3">Blog</h2>
          </div>
          <button className="text-gray-400 hover:text-white text-sm transition-colors">view all</button>
        </div>


        <div className="space-y-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 py-6 border-b border-gray-800 last:border-b-0"
            >

              <div className="relative w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>


              <div className="flex-1 space-y-3">
                <div className="text-sm text-gray-400">{post.date}</div>
                <h3 className="text-xl md:text-2xl font-semibold leading-tight">{post.title}</h3>


                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


              <div className="w-full md:w-auto">
                <button
                  className="w-full md:w-auto bg-white border-gray-600 text-black rounded-[100px] px-8 py-4 hover:text-white hover:bg-gray-800"
                >
                  Read
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
