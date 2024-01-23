'use client';

import React, { useState } from 'react';

type ScaleModalProps = {
  closeModal: () => void;
  courseCode: string
};

export default function ScaleModal({ closeModal, courseCode }: ScaleModalProps) {
  const [scale, setScale] = useState('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    if (parseInt(newValue) > 0 && parseInt(newValue) <= 5) {
      setScale(newValue);
    } else if (newValue == '') {
      setScale(newValue);
    }
  };

  const handleSubmit = async() => {
    const doomness = scale;
    const body = { doomness, courseCode };
    try {
      const response = await fetch('/api/course-update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
    } catch (error) {
      console.error(error);
    }
  }

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
        className="bg-black text-white h-12 rounded-md  text-center"
        onChange={handleInput}
        value={scale}
      ></input>
      <button className='bg-blue-500 p-1.5 rounded-md ml-auto mt-3 text-sm hover:opacity-60' onClick={handleSubmit}>Submit</button>  
    </div>
  );
}

// need to make it so the submit button works