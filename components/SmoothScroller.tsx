// app/components/SmoothScroller.tsx

"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

function LenisAnchorHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link) {
        const href = link.getAttribute('href');

        // Check if it's an anchor link on the same page
        if (href && href.startsWith('#')) {
          // Check if the link is just "#" (like your "Home" link)
          if (href === '#') {
            e.preventDefault(); // Stop default behavior
            lenis.scrollTo(0);  // Scroll to the top of the page
          } else {
            // Check if the target element exists on the page
            const targetElement = document.querySelector(href);
            if (targetElement) {
              e.preventDefault(); // Stop default behavior
              lenis.scrollTo(href); // Tell lenis to scroll to it
            }
          }
        }
      }
    };

    // Add the global click listener
    document.addEventListener('click', handleAnchorClick);

    // Clean up the listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [lenis]); // Re-run this effect if the lenis instance changes

  return null; // This component renders nothing
}


function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2 }}>
      {/*
        We are using @ts-ignore here because @ts-expect-error
        was not detecting the known React 19 vs 18 type conflict.
      */}
      <>
        {children}
        <LenisAnchorHandler />
      </>
    </ReactLenis>
  );
}

export default SmoothScroller;