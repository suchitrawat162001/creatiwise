
export default function FooterSection() {
  const socialLinks = [
    { name: "Dribbble", href: "#" },
    { name: "Behance", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
  ]

  return (
    <footer className="bg-black text-white py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">LET'S TALK!</h2>

          <div className="flex items-center justify-center gap-2 group cursor-pointer">
            <span className="text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors">
              rehanurrahman@gmail.com
            </span>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16699 4.6665H11.8337M11.8337 4.6665V15.3332M11.8337 4.6665L1.16699 15.3332" stroke="white" strokeWidth="2" />
            </svg>

          </div>
        </div>


        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">

          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">© Rehan Rahman - 2023</p>
          </div>


          <div className="flex gap-6 md:gap-8">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
