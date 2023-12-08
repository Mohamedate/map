export default function Container({ children, classes = "" }) {
  return (
    <div className={`container m-auto max-w-7xl px-4 ${classes}`}>
      {children}
    </div>
  );
}
