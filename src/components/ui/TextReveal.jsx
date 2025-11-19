import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function TextReveal() {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const glowRefs = useRef([])

  useEffect(() => {
    // Add glow elements to ref array
    glowRefs.current = glowRefs.current.slice(0, 3)

    // Initial setup - text very large and transparent
    gsap.set(textRef.current, {
      scale: 8,  // Increased from 5 to 8 for more dramatic zoom
      opacity: 0,
    })

    // Glow elements setup
    glowRefs.current.forEach((glow, index) => {
      gsap.set(glow, {
        scale: 0.5,
        opacity: 0,
      })
    })

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",  // Changed from "top bottom" to start when 20% of element is visible
        end: "center center",
        scrub: 1,
        markers: false,
      }
    })

    // Zoom in text animation - longer duration for smoother effect
    tl.to(textRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,  // Increased duration
      ease: "power3.out"
    })

    // Glow elements animation - delayed slightly more
    glowRefs.current.forEach((glow, index) => {
      tl.to(glow, {
        scale: 1,
        opacity: index === 0 ? 0.8 : index === 1 ? 0.6 : 0.4,
        duration: 0.8,  // Increased duration
        ease: "power2.out"
      }, "-=0.7")  // Increased overlap reduction
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach(instance => instance.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="h-[250px] md:h-[300px] lg:h-[350px] xl:h-[390px] relative flex items-center justify-center bg-black overflow-hidden px-4"
    >
      {/* Mobile Glow */}
      <div
        ref={el => glowRefs.current[0] = el}
        className="absolute z-0"
        style={{
          width: "500px",
          height: "150px",
          borderRadius: "50% / 40%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Desktop Glow */}
      <div
        ref={el => glowRefs.current[1] = el}
        className="absolute z-0 hidden lg:block"
        style={{
          width: "800px",
          height: "180px",
          borderRadius: "50% / 40%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(30px)",
        }}
      />

      {/* XL Desktop Glow */}
      <div
        ref={el => glowRefs.current[2] = el}
        className="absolute z-0 hidden xl:block"
        style={{
          width: "1000px",
          height: "220px",
          borderRadius: "50% / 40%",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Main Text */}
      <h1
        ref={textRef}
        className="relative z-10 text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-transparent bg-clip-text tracking-widest font-inder text-center inter-font"
        style={{
          backgroundImage:
            "url(/images/img77.png), repeating-linear-gradient(45deg, #222 0px, #222 10px, #111 10px, #111 20px)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transformOrigin: "center center",
          willChange: "transform, opacity"
        }}
      >
        NEXRO
      </h1>
    </div>
  )
}