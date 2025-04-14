import Image from 'next/image';

export default function Pollution() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl text-green-600 mb-6">GRAPH</h2>
      <div className="relative w-full aspect-[2/1]">
        <Image 
          src="/img/pollution.png"
          alt="Teneur moyenne en CO2 par province canadienne (2021-2023)"
          fill
          className="object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}