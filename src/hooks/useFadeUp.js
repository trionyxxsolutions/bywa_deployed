import { useEffect } from 'react';

export function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    const observeAll = () => {
      document.querySelectorAll('.fade-up:not(.fade-up--observed)').forEach((el) => {
        el.classList.add('fade-up--observed');
        observer.observe(el);
      });
    };

    // Observe whatever is already in the DOM on mount
    observeAll();

    // Watch for elements added later (e.g. async-loaded content like the
    // Gallery cards, which mount only after their manifest.json fetch
    // resolves — those were previously never picked up at all).
    const mutationObserver = new MutationObserver(() => observeAll());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}