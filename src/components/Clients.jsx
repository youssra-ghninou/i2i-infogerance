import Microsoft from '/images/microsoft.png'
import Google from '/images/google.png'
import Spotify from '/images/spotify.png'
import Tiktok from '/images/tiktok.png'
import Tesla from '/images/tesla.png'
import Yassir from '/images/yassir.png'

const Clients = () => {
    return (
        <div className="flex flex-col gap-5 my-20">
            <div className="font-bold text-xl">
                Client We helped
            </div>
            <div className="flex items-center justify-between flex-wrap gap-5 md:gap-5">
                <img src={Microsoft} className="w-1/4 md:w-3/12" alt="" />
                <img src={Google} className="w-1/4 md:w-3/12" alt="" />
                <img src={Yassir} className="w-1/4 md:w-3/12" alt="" />
                <img src={Spotify} className="w-1/4 md:w-3/12" alt="" />
                <img src={Tiktok} className="w-1/4 md:w-3/12" alt="" />
                <img src={Tesla} className="w-1/4 md:w-3/12" alt="" />
            </div>
        </div>
    );
}
 
export default Clients;