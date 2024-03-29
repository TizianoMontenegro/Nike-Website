import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Nav';
import PopularProducts from './components/PopularProducts';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import Subscribe from './components/Subscribe';
import SuperQuality from './components/SuperQuality';

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}