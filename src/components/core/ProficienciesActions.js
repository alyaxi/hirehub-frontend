import { useState } from "react";
import { Core } from "..";
import Icon from "../icon";

function ProficienciesActions({ buttons, type, id }) {
    const [action, setAction] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };  
    return (
        <>
            <Core.PopupModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type={type} action={action} id={id} />
            {
                buttons?.length &&
                <div className="flex justify-center gap-x-2">
                    {buttons?.includes("add") &&
                        <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all"
                            onClick={() => {
                                showModal();
                                setAction('add');
                            }}
                        >
                            <span className='text-gray-6'><Icon name="Plus" /></span>
                        </span>
                    }
                    {buttons?.includes("edit") &&
                        <span className="flex justify-center items-center w-[35px] h-[35px] cursor-pointer bg-gray-7 rounded-full hover:bg-gray-11 active:bg-gray-12 transition-all"
                            onClick={() => {
                                showModal();
                                setAction('edit');
                            }}
                        >
                            <span className='text-gray-6'><Icon name="PencilWithLine" /></span>
                        </span>
                    }
                </div>
            }
        </>
    )
}

export default ProficienciesActions