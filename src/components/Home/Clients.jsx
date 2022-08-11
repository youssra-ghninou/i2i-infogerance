import Microsoft from '/images/microsoft.png'
import Google from '/images/google.png'
import Spotify from '/images/spotify.png'
import Tiktok from '/images/tiktok.png'
import Tesla from '/images/tesla.png'
import Yassir from '/images/yassir.png'

const Clients = () => {
    return (
        <div className="flex flex-col gap-5 my-20 lg:mt-60">
            <div className="font-bold text-xl text-black dark:text-white transition duration-500">
                Clients we helped :
            </div>
            <div className="flex items-center justify-between flex-wrap gap-5 md:gap-5">
                <img src={Microsoft} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
                <img src={Google} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
                <img src={Yassir} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
                <img src={Spotify} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
                <img src={Tiktok} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
                <img src={Tesla} className="w-1/4 h-auto md:w-3/12 lg:w-[12%]" alt="brands" />
            </div>
        </div>
    );
}
 
export default Clients;