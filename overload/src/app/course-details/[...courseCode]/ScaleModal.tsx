'use client';

import React, { useState } from 'react';

type ScaleModalProps = {
  closeModal: () => void;
  scale: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
};

export default function ScaleModal({
  closeModal,
  handleInput,
  scale,
}: ScaleModalProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top bg-white text-black p-5 rounded-md font-bold flex flex-col items-center">
      <button
        className="top-0 right-1 absolute font-light"
        onClick={closeModal}
      >
        X
      </button>
      <div className="mb-3">Insert your scale of 1-5 for the course</div>
      <input
        className="bg-black text-white h-12 rounded-md w-full"
        onChange={handleInput}
        value={scale}
      ></input>
      <button className="bg-blue-500 p-1.5 rounded-md ml-auto mt-3 text-sm hover:opacity-60">
        Submit
      </button>
    </div>
  );
}
