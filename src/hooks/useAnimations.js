import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook: GSAP ScrollTrigger-based reveal animation for a container ref.
 * Animates all children with .reveal class inside the container.
 */
export function useScrollReveal(containerRef, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll('.reveal') ?? []
      elements.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, deps)
}

/**
 * Hook: Animated counter (runs immediately, useful for page load).
 */
export function useCounterAnimation(active = true) {
  useEffect(() => {
    if (!active) return
    const counters = document.querySelectorAll('.counter')
    counters.forEach(el => {
      const target = +el.dataset.target
      gsap.fromTo({ val: 0 }, { val: target, duration: 2, ease: 'power2.out' }, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate() {
          el.textContent = Math.floor(this.targets()[0].val)
        }
      })
    })
  }, [active])
}
