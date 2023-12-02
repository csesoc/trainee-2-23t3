'use client';

type ScaleModalProps = {
  closeModal: () => void
}

export default function ScaleModal({closeModal}: ScaleModalProps) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top bg-white text-black p-5 rounded-md font-bold flex flex-col items-center">
      <button className="top-0 right-1 absolute font-light" onClick={closeModal}>X</button>
      <div className="mb-3">Insert your scale of 1-5 for the course</div>
      <input className="bg-black text-white h-12 rounded-md"></input>
    </div>
  );
}
