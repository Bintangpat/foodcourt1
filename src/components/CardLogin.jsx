/** @format */

const CardLogin = () => {
  return (
    <div className="row-end-1 m-[2rem] flex h-fit flex-row gap-[2rem] rounded-2xl border-gray-200 bg-white p-[2rem] shadow-2xl">
      <div className="flex h-[200rem] w-2/5 items-center justify-center rounded-[2rem] bg-white"></div>
      <div className="relative flex h-[48rem] w-3/5">
        <img
          alt="Illustration of a car driving through green clouds"
          className="h-full w-full rounded-[2rem] object-cover"
          height=""
          src={"./src/assets/top-view-table-full-food.jpg"}
          width=""
        />

        <div className="absolute bottom-0 flex h-320 w-full flex-col items-center p-[2rem]">
          <div className="flex h-full w-full flex-row items-center rounded-2xl bg-amber-50 pl-[1rem]">
            <img
              src="./src/assets/bing_generated_qrcode.png"
              className="shadow-fixed rounded-2xl"
              height="230"
              width="230"
              alt=""
            />
            <div>
              <p className="font-Intertight text-2xl font-bold text-black">
                Telusuri lebih banyak tentang kami
              </p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 flex h-320 w-full flex-col items-center p-[2rem]"></div>
      </div>
    </div>
  );
};

export default CardLogin;
