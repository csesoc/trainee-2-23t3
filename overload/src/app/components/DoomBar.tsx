import React from 'react';

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
    <div className={`w-full h-16 mt-10 ${doomColors[doomness]}`}></div>
  );
}
