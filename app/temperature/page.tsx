import Image from 'next/image';

export default function Temperature() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl text-green-600 mb-6">MAXIMUM TEMPERATURE OF EACH TERRITORIES</h2>
      <div className="relative w-full aspect-[2/1]">
        <Image 
          src="/img/temperature.png"
          alt="Évolution des températures moyennes par province canadienne (2021-2023)"
          fill
          className="object-contain rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}