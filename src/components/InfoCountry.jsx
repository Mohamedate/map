import Border from "./Border";

export default function InfoCountry({ flag, name, detail, borders, alt }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="md:basis-1/2">
        <img className="h-full w-full" src={flag} alt={alt} />
      </div>
      <div className="flex flex-col justify-evenly py-10 md:basis-1/2 lg:py-0 lg:pl-20">
        <h1 className="mb-5 text-2xl font-extrabold md:mb-0">{name}</h1>
        <div className="grid gap-2 md:grid-cols-2">
          {detail.map((item, i) => (
            <p className={`${i === 3 ? "mb-9 sm:m-0" : ""}`} key={i}>
              <span className=" font-bold">{item.name}: </span>
              <span>{item.value}</span>
            </p>
          ))}
        </div>
        {borders && <Border borders={borders} />}
      </div>
    </div>
  );
}
