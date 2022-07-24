import Microsoft from '../images/microsoft.png'
import Google from '../images/google.png'
import Spotify from '../images/spotify.png'

const Clients = () => {
    return (
        <div className="flex flex-col gap-5 my-20">
            <div className="font-bold text-xl">
                Client We helped
            </div>
            <div className="flex items-center justify-between">
                <img src={Microsoft} className="w-1/4" alt="" />
                <img src={Google} className="w-1/4" alt="" />
                <img src={Spotify} className="w-1/4" alt="" />
            </div>
        </div>
    );
}
 
export default Clients;