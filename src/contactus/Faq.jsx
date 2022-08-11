const Faq = () => {
    return ( 
        <div className="flex md:py-10 ">
        <div className="flex flex-1 flex-col w-full gap-5 pt-5 justify-center lg:text-left md:relative lg:justify-center lg:items-center lg:px-40  lg:pb-14">
            <div className="text-primary lg:pr-72 font-bold text-sm  dark:text-white transition duration-500 ">
            FAQ
            </div>
            <div className="text-text font-bold text-4xl dark:text-white transition duration-500">
            Here are some answers for frequntly asked questions
            </div>
            <h2 className="font-normal text-gray text-base">
            We got a lot of messages with the same Questions, so here are some fast answers for popular Questions</h2>
        </div>
    </div>

     );
}
 
export default Faq;