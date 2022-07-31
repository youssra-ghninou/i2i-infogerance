import CheckServicesButton from "./buttons/CheckServicesButton";
import TalkButton from "./buttons/TalkButton"

const CommonHeader = (props) => {
    return (  
        <div className="flex md:py-10">
            <div className="flex flex-1 flex-col w-full pt-5 justify-center gap-5 md:relative lg:justify-center lg:items-center lg:px-40 lg:text-center">
                <div className="text-primary font-bold text-sm dark:text-gray transition duration-500">
                    {props.title}
                </div>
                <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
                    {props.bigtitle}
                </div>
                <h2 className="font-normal text-gray text-base">
                    {props.content}
                </h2>
            </div>
        </div>

    );
}
 
export default CommonHeader;