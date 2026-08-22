export default function GuesthouseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @media (min-width: 721px) {
          .gh3Hero,
          .gh3HeroInner {
            height: calc(100svh - 88px) !important;
            min-height: calc(100svh - 88px) !important;
          }
        }

        @media (max-width: 720px) {
          .gh3Hero,
          .gh3HeroInner {
            height: auto !important;
            min-height: calc(100svh - 86px) !important;
          }
        }
      `}</style>
      {children}
    </>
  )
}
