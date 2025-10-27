/**
 * Composable per gestire lo scroll smooth verso elementi con hash
 */
export function useScrollTo() {
  const scrollToElement = (hash: string, offset = 80) => {
    const element = document.querySelector(hash);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleHashClick = (event: MouseEvent, hash: string) => {
    event.preventDefault();
    scrollToElement(hash);
    // Aggiorna l'URL senza ricaricare la pagina
    history.pushState(null, '', hash);
  };

  return {
    scrollToElement,
    handleHashClick
  };
}
