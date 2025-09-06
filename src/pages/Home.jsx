import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <header className="w-full mt-5">
        <Navbar />
      </header>

      <main className="flex flex-col mt-32 items-center justify-center flex-grow text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Civil Guruji CRM
        </h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
          Welcome to <span className="font-semibold">Civil Guruji CRM</span> – 
          a simple and powerful tool to manage your leads efficiently. 
          Capture, track, and organize your business leads in one place 
          with ease and clarity.
        </p>

        <a
          href="/leads"
          className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 font-medium"
        >
          Get Started
        </a>
            
      </main>
      <section
        id="about"
        className="bg-gradient-to-r mt-32 from-white to-indigo-50 py-16 px-6 md:px-20 text-center shadow-inner"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">
          About Civil Guruji CRM
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Civil Guruji CRM is designed to simplify lead management for 
          businesses of all sizes. Our platform helps you capture, 
          organize, and follow up with leads efficiently ensuring no 
          opportunity is missed. With an intuitive interface and 
          powerful features, you can focus on building strong customer 
          relationships while we handle the organization.
        </p>
      </section>

      <footer className="py-4 mt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Civil Guruji CRM. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
