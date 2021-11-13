/* eslint-disable jsx-a11y/iframe-has-title */
const Home = (props) => {
  const { search, filtered, filteredCoord } = props;

  return (
    <>
      <div className="flex flex-col items-center m-auto justify-between bg-wallpaper h-screen w-screen bg-contain">
        <div className=" lg:w-2/6 md:w-2/5 sm:2/4 w-full flex flex-col item-center justify-center m-auto text-center  space-y-4 ">
          <h1 className=" text-yellow-600 text-5xl font-bold  shadow-2xl ">
            Hava Durumu
          </h1>
          <div className="py-5">
            <form onSubmit={(e) => search(e)}>
              <input
                className=" bg-transparent border-b border-yellow-600 text-center outline-none w-3/4 text-yellow-500  "
                placeholder="Şehir ismi girin.."
                type="text"
              ></input>
            </form>
          </div>
          <h2
            style={{ textShadow: "1px 3px rgba(0,0,0,.7)" }}
            className="text-white  font-bold text-xl"
          >
            {filtered.name},{filtered.sys.country}
          </h2>
          <h3
            style={{ textShadow: "1px 3px rgba(0,0,0,.7)" }}
            className="text-white  font-bold text-5xl"
          >
            {Math.floor(filtered.main.temp)}°C
          </h3>
          <h4 className=" text-lg font-bold text-white">
            Gökyüzü{" "}
            {filtered && filtered.weather.map((item) => item.description)}
          </h4>
          <h4 className=" text-base font-bold text-white">
            {Math.floor(filtered.main.temp_max)}°C -
            {Math.floor(filtered.main.temp_min)}°C
          </h4>
          <h4 className=" text-xs font-bold text-white">
            nem {Math.floor(filtered.main.humidity)}%
          </h4>
        </div>
        <div className=" rounded-full m-auto ">
          <iframe
            className=" border-8 border-gray-600 shadow-2xl rounded-full"
            src={`https://maps.google.com.tr/?q=${
              filteredCoord.lat || filteredCoord.latitude
            },${
              filteredCoord.lon || filteredCoord.longitude
            }&z=16&output=embed`}
            id="map"
            width="100%  "
            height="100%"
          ></iframe>
        </div>{" "}
      </div>
    </>
  );
};

export default Home;
