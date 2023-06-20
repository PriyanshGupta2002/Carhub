"use client";
import { CarTypesProps } from "@/types";
import React, { useState } from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { generateCarImages } from "@/utils/fetchData";

interface carDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarTypesProps;
}

const CarDetails = ({ isOpen, closeModal, car }: carDetailsProps) => {
    const singleCarProps = Object.entries(car)
    const [carImgUrl, setcarImgUrl] = useState(generateCarImages(car))
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full relative max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 shadow-lg text-left flex flex-col transition-all gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute right-2 top-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      src={"/close.svg"}
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex-col flex gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        alt={car.model}
                        src={carImgUrl}
                        priority
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex gap-3">
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                        alt={car.model}
                        src={generateCarImages(car,'29')}
                        priority
                        fill
                        className="object-contain cursor-pointer"
                        onClick={()=>setcarImgUrl(generateCarImages(car,"29"))}
                      />
                        </div>
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                        alt={car.model}
                        src={generateCarImages(car,'33')}
                        priority
                        fill
                        onClick={()=>setcarImgUrl(generateCarImages(car,"33"))}
                        className="object-contain cursor-pointer"
                      />
                        </div>
                        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                        <Image
                        alt={car.model}
                        src={generateCarImages(car,'19')}
                        onClick={()=>setcarImgUrl(generateCarImages(car,"19"))}
                        priority
                        fill
                        className="object-contain cursor-pointer"
                      />
                        </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-semibold text-xl capitalize">{car.make} {car.model}</h2>
                        <div className="mt-3 flex flex-wrap gap-4">
                            {singleCarProps.map(([key,value])=>(
                                <div className="flex justify-between gap-5 text-right w-full" key={key}>
                                        <h4 className="text-gray capitalize">{key.split("_").join(" ")}</h4>
                                        <p className="text-black-100 font-semibold">{value}</p>
                                </div>
                            ))}
                        </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
