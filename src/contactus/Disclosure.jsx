import { Disclosure, Transition  } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { TiPlus } from 'react-icons/ti';


const DisclosureInfos = (props) => {
    return (
    <div className="">
            <div className="flex rounded-[5px] border-primary dark:border-white border-2 border-solid px-2 py-3">
                <Disclosure>
                  {({ open }) => (
                    <div className='flex flex-col justify-between w-full gap-2'>
                        <Disclosure.Button className="flex justify-between w-full ">
                            <div className="text-[15px] text-black font-bold dark:text-white transition duration-500">{props.title}</div>
                                <TiPlus
                                className={`${
                                    open ? 'rotate-180' : ''
                                } text-primary text-xl dark:text-white transition duration-500`}
                                />
                        </Disclosure.Button>
                    <Transition
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-500 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                        >
                      <Disclosure.Panel className="transition duration-500 rounded-[5px] font-normal text-[15px] text-text dark:text-gray">
                        {props.content}
                      </Disclosure.Panel>
                    </Transition>
                    </div>
                  )}
                </Disclosure>
            </div>
    </div>
    );
}
 
export default DisclosureInfos;