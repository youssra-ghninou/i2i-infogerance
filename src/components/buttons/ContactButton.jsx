const ContactButton = (props) => {
    return ( 
        <div className="button rounded-[5px] border-gray   border-2 border-solid h-10 flex items-center pl-2 mt-2 lg:w-[450px]">
            <button  >
                <div className="font-normal text-xs text-gray  dark:text-gray transition duration-500">{props.text} </div>
            </button>
        </div>

     );
}
 
export default ContactButton;