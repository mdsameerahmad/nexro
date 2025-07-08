import TextReveal from '@/components/ui/TextReveal';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const handleStartProject = () => alert('Let us start your project!');
  const handleViewWork = () => alert('Viewing our work portfolio');

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section - Improved Responsiveness */}
      <div
        className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32"
        style={{
          backgroundImage: 'url(/images/img77.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-left max-w-4xl mx-auto w-full px-4" data-aos="fade-up">
          <h1 className="text-left text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold text-white mb-4 sm:mb-6 leading-tight pt-16 sm:pt-20 md:pt-[100px]">
            We Build Brands That <br className="hidden sm:block" /> Dominate
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12">
            We craft experiences, not just visuals — made to convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            {/* Start a Project → WhatsApp */}
            <Button
              onClick={() => {
                const phoneNumber = '919971775481';
                const message = "Hi NEXRO team! I'm interested in starting a project.";
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
              }}
              variant="outline"
              size="md"
              className="bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
            >
              Start a Project
            </Button>

            {/* View Our Work → /service route */}
            <Button
              onClick={() => (window.location.href = '/work')}
              variant="outline"
              size="md"
              className="border-2 border-white text-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <TextReveal />

      {/* Why NEXRO Section */}
      <div
        className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 text-center"
        data-aos="fade-up"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-global-5 mb-4 md:mb-6">
          WHY NEXRO
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed text-global-2 max-w-2xl mx-auto px-4">
          NEXRO blends bold design, smart strategy & conversion-driven marketing to help brands
          grow, scale, and dominate.
        </p>
      </div>

      {/* Services Grid - Improved Responsiveness */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-12 md:pb-16 lg:pb-20">
        {/* First Row - Single Large Card */}
        <div className="mb-6 md:mb-8" data-aos="zoom-in-up">
          <div
            className="relative h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] rounded-lg overflow-hidden"
            style={{
              backgroundImage: 'url(/images/capabilities-branding-r.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
              <div className="max-w-md text-left" data-aos="fade-right">
                <h3 className="text-lg sm:text-xl md:text-l lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4 mt-[200px]">
                  BRANDING AND STRATEGY
                </h3>
                <p className="text-sm sm:text-base lg:text-[18px] text-white/50 font-light leading-relaxed mb-[100px] mr-[50px] ">
                  NEXRO turns bold ideas into iconic brands. From positioning to visual identity, we
                  craft strategic blueprints that don’t just stand out — they stand the test of
                  time. Build a brand that people remember and competitors envy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="lg:col-span-2" data-aos="fade-right">
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[646px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url(/images/img__0x0.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
                <div className="max-w-lg text-left" data-aos="fade-up">
                  <h3 className="text-lg sm:text-xl md:text-l lg:text-m font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4 mt-[200px]">
                    MARKETING & SALES
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[11px] text-white/50 font-light leading-relaxed mb-[100px] mr-[200px] ">
                    NEXRO transforms clicks into loyal customers. With targeted campaigns,
                    persuasive messaging, and sales funnels that convert, we drive growth that’s
                    measurable, scalable, and unstoppable. Get your audience to buy — and keep
                    buying.
                  </p>
                </div>
              </div>
            </div>
          </div>
         <div data-aos="fade-left">
  <div
    className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[646px] rounded-lg overflow-hidden border border-gray-600"
    style={{
      backgroundImage: 'url(/images/img__1.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0px 4px 6px rgba(136, 136, 136, 1)',
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center text-center px-4 sm:px-6 md:px-10">
      <div className="max-w-md pr-[50px]  " data-aos="fade-up">
        <h3 className="text-lg sm:text-xl md:text-m lg:text-m font-semibold text-white/60 tracking-wide mb-2 md:mb-2 lg:mb-4">
          SEO MARKETING
        </h3>
        <p className="text-sm sm:text-base lg:text-[11px] text-white/50 font-light leading-relaxed md:mb-[30px] mb-[100px]">
          NEXRO blends bold design, smart strategy & conversion-driven marketing
          to help brands grow, scale, and dominate.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>

        {/* Third Row - Two Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div data-aos="fade-right">
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[646px] rounded-lg overflow-hidden border border-gray-700"
              style={{
                backgroundImage: 'url(/images/img_home5.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
                <h3
                  className="text-lg sm:text-xl md:text-l lg:text-m font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4"
                  data-aos="zoom-in"
                >
                  DIGITAL MARKETING
                </h3><p className='text-sm sm:text-base lg:text-[11px] text-white/50 font-light leading-relaxed mb-[200px]'>
                  NEXRO crafts bold digital strategies that cut through the noise, drive engagement, and turn clicks into loyal fan
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2" data-aos="fade-left">
            <div
              className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[646px] rounded-lg overflow-hidden"
              style={{
                backgroundImage: 'url(/images/img__3.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center text-left p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-md" data-aos="fade-up">
                  <h3 className="text-lg sm:text-xl md:text-l lg:text-m font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4">
                    PERFORMANCE MARKETING
                  </h3>
                  <p className="text-sm sm:text-base lg:text-[11px] text-white/50 font-light leading-relaxed mb-[100px] mr-[200px]">
                    NEXRO fuels growth with data-driven precision. We craft paid campaigns that hit
                    hard, optimize relentlessly, and deliver ROI that speaks louder than promises.
                    More reach, more clicks, more profit — all dialed in for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
