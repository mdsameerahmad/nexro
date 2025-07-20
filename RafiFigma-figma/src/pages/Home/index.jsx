
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

  return (
    <div className="min-h-screen w-full bg-black overflow-x-hidden">
      <Header />

      {/* Hero Section - Aligned with Header */}
      <div
        className="relative min-h-screen flex flex-col justify-center"
        style={{
          backgroundImage: 'url(/images/img77.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div
  className="relative z-10 text-left w-full px-4 sm:px-6 md:px-8"
  data-aos="fade-up"
>
  <div className="max-w-full lg:ml-[60px] xl:ml-[80px] 2xl:ml-[100px]">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] font-bold text-white mb-4 sm:mb-6 leading-tight pt-16 sm:pt-20 md:pt-[100px]">
      We Build Brands That <br className="hidden sm:block" /> Dominate
    </h1>

    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12">
      We craft experiences, not just visuals — made to convert.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <Button
        onClick={() => {
          const phoneNumber = '919971775481';
          const message = "Hi NEXRO team! I'm interested in starting a project.";
          window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            '_blank'
          );
        }}
        variant="outline"
        size="md"
        className="bg-white text-black hover:bg-black hover:text-white w-full sm:w-auto"
      >
        Start a Project
      </Button>

      <Button
        onClick={() => (window.location.href = '/work')}
        variant="outline"
        size="md"
        className="border-2 border-white text-white hover:bg-white hover:text-black w-full sm:w-auto"
      >
        View Our Work
      </Button>
    </div>
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
                <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4 mt-0 sm:mt-[100px] md:mt-[200px]">
                  BRANDING AND STRATEGY
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-[18px] text-white/50 font-light leading-relaxed mb-4 sm:mb-[100px] mr-0 sm:mr-[50px]">
                  NEXRO turns bold ideas into iconic brands — timeless, memorable, and envied.
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
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4 mt-0 sm:mt-[100px] md:mt-[200px]">
                    MARKETING & SALES
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/50 font-light leading-relaxed mb-4 sm:mb-[100px] mr-0 sm:mr-[200px]">
                    NEXRO turns clicks into loyal customers with targeted campaigns and funnels that convert and scale.
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end items-center text-center p-4 sm:p-6 md:p-10">
                <div className="max-w-md pr-0 sm:pr-[50px]" data-aos="fade-up">
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-2 lg:mb-4">
                    SEO MARKETING
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/50 font-light leading-relaxed mb-4 sm:mb-[30px] md:mb-[100px]">
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
                  className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4"
                  data-aos="zoom-in"
                >
                  DIGITAL MARKETING
                </h3>
                <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/50 font-light leading-relaxed mb-4 sm:mb-[100px] md:mb-[200px]">
                  NEXRO crafts bold digital strategies that cut through the noise, drive engagement, and turn clicks into loyal fans
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
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold text-white/60 tracking-wide mb-2 md:mb-3 lg:mb-4">
                    PERFORMANCE MARKETING
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] text-white/50 font-light leading-relaxed mb-4 sm:mb-[100px] mr-0 sm:mr-[200px]">
                    NEXRO fuels growth with data-driven campaigns that hit hard, optimize fast, and deliver real ROI.
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