//

export default function Spinner() {
  return (
    <div className=" fixed left-0 top-0 z-30 grid h-full w-full place-content-center bg-white/30 backdrop-blur-sm dark:bg-dBlued ">
      <div className="lds-ripple">
        <div className=" border-4 border-vDBlueL dark:border-white"></div>
        <div className=" border-4 border-vDBlueL dark:border-white"></div>
      </div>
    </div>
  );
}
