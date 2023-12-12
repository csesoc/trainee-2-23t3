import React from 'react';
import skullSvg from '@/app/resources/skull-head-svgrepo-com.svg';
import Image from 'next/image';

type DoomBarProps = {
  doomness: number;
};

export default function DoomBar({ doomness }: DoomBarProps) {
  const doomColors: { [key: number]: string } = {
    1: 'bg-green-500',
    2: 'bg-yellow-500',
    3: 'bg-red-500',
  };

  return (
    <div
      className={`w-full h-16 mt-10 flex items-center justify-evenly ${doomColors[doomness]}`}
    >
      {Array.from({length: 5}).map((_, idx) => (
        <Image
          src={skullSvg}
          alt="skull-logo"
          className="object-cover h-16 w-16"
          key={idx}
        />
      ))}
    </div>
  );
}
