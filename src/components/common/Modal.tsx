import { CircleX } from "lucide-react";
import React from "react";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    width: string;
    height: string;
    prevUrl: string;
}

export const Modal = ({ isOpen, closeModal, width, height, prevUrl }: Props) => {
    return (
        <div className={`fixed z-0 top-0 left-0 w-screen h-screen invisible ${isOpen ? "lg:visible" : "invisible"}`}>
            <div
                className={`absolute top-0 left-0 w-full h-full bg-black translate-all duration-300 ${isOpen ? "opacity-50" : "opacity-0"}`}
                onClick={closeModal}
            />
            <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg ${width} ${height} max-w-full max-h-full p-10`}>
                <div className='flex justify-center w-full h-full px-10 py-20'>
                    <div className='w-11/12 min-w-sm h-full rounded-lg'>
                        <iframe src={prevUrl} className='w-full h-full'></iframe>
                    </div>
                </div>
                <CircleX className='absolute right-5 top-5 w-10 h-10 stroke-gray-700' onClick={closeModal} />
            </div>
        </div>
    );
};
