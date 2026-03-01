import { useState, useEffect } from "react";

/**
 * A hook that tracks which section is currently active in the viewport.
 * Useful for updating navigation links in the Header based on scroll position.
 */
export function useScrollSpy(
  itemIds: string[],
  options: { offset?: number; threshold?: number } = {},
): string {
  const [activeId, setActiveId] = useState<string>(itemIds[0] || "");
  const { offset = 100 } = options;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the last section that has its top above the current scroll position + offset
      const currentSection = [...itemIds]
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .reduce((closest, current) => {
          if (scrollPosition >= current.offsetTop) {
            return current.id;
          }
          return closest;
        }, itemIds[0]);

      if (currentSection !== activeId) {
        setActiveId(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemIds, activeId, offset]);

  return activeId;
}
