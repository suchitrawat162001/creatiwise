export default function ExperienceSection() {
  const experiences = [
    {
      title: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023",
    },
    {
      title: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023",
    },
  ]

  return (
    <section className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center mb-12">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold ml-3">Experience</h2>
        </div>


        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:justify-between py-4 border-b border-gray-800 last:border-b-0"
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
              </div>
              <div className="text-right">
                <div className="text-lg md:text-xl font-medium text-white mb-1">{exp.company}</div>
                <div className="text-sm text-gray-400">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
