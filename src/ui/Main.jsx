export default function Main({ children }) {
  return (
    <main className="grid h-screen max-h-[1000px] grid-rows-[auto_1fr_auto] bg-vLGrayL text-vDBlueL transition-all duration-300 dark:bg-vDBlued">
      {children}
    </main>
  );
}
