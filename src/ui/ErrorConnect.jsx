export default function ErrorConnect({ error }) {
  const notFound = error.message === "Not Found";

  return (
    <div className="h-full pt-20">
      <div className=" m-auto w-28">
        <img
          src={notFound ? "/search-location.png" : "/no-internet.png"}
          alt={notFound ? "not found" : "error connection"}
          className=" h-full w-full"
        />
      </div>
      <p className=" mt-3 text-center font-semibold dark:text-vLGrayL ">
        {notFound ? "No Country Found" : "Check From Connection"}
      </p>
    </div>
  );
}
