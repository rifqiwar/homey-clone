import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const HomePage = () => {
    return (
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        {/* <section className="text-center py-10 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold">Discover the best accommodations in Bahamas Islands</h1>
          <div className="flex justify-center mt-6">
            <input
              type="text"
              placeholder="Where to go?"
              className="border border-gray-300 p-2 w-full md:w-1/2"
            />
          </div>
        </section> */}
        <Header/>
        <Hero/>
  
        {/* Stats Section */}
        <section className="flex flex-col md:flex-row justify-around text-center my-10">
          <div>
            <h2 className="text-2xl font-bold">+50</h2>
            <p>Destinations</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">+200</h2>
            <p>Accommodations</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">+150</h2>
            <p>Verified Hosts</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">+20</h2>
            <p>Years Experience</p>
          </div>
        </section>
  
        {/* Explore Section */}
        <section className="my-10">
          <h2 className="text-center text-3xl font-bold mb-6">Explore top destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="relative">
              <img src="https://demo11.gethomey.io/wp-content/uploads/2021/09/header-05.jpg" alt="Nassau" className="w-full h-48 object-cover" />
              <h3 className="text-center mt-2">Nassau</h3>
            </div>
            {/* Card 2 */}
            <div className="relative">
              <img src="/images/grand-bahamas.jpg" alt="Grand Bahamas" className="w-full h-48 object-cover" />
              <h3 className="text-center mt-2">Grand Bahamas</h3>
            </div>
            {/* Card 3 */}
            <div className="relative">
              <img src="/images/paradise-island.jpg" alt="Paradise Island" className="w-full h-48 object-cover" />
              <h3 className="text-center mt-2">Paradise Island</h3>
            </div>
            {/* Card 4 */}
            <div className="relative">
              <img src="/images/freeport.jpg" alt="Freeport" className="w-full h-48 object-cover" />
              <h3 className="text-center mt-2">Freeport</h3>
            </div>
          </div>
        </section>
  
        {/* Featured Listings */}
        <section className="my-10">
          <h2 className="text-center text-3xl font-bold mb-6">Featured Listings</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Single Listing */}
            <div className="border p-4 rounded-lg shadow-md">
              <h3>Beautiful Cove</h3>
              <p>$175.00/night</p>
            </div>
            {/* Add more listings similarly */}
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="my-10">
          <h2 className="text-center text-3xl font-bold mb-6">From our customers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 shadow-lg">
              <p>"Great experience!"</p>
              <span>- Sasha Word</span>
            </div>
            {/* More testimonials */}
          </div>
        </section>
  
        {/* Blog Section */}
        <section className="my-10">
          <h2 className="text-center text-3xl font-bold mb-6">From our blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border p-4">
              <h3>What People Are Saying</h3>
              <p>Learn more about our service...</p>
            </div>
            {/* More blog posts */}
          </div>
        </section>
        <Footer/>
      </div>
    );
  };
  
  export default HomePage;
  