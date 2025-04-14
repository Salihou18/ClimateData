import Image from 'next/image';

export default function Precipitation() {
  return (
      <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-green-600 mb-6">
              MAXIMUM PRECIPITATIONS THAT FELL ON EACH TERRITORIES
          </h2>
          <div className="relative w-full aspect-[2/1]">
              <Image
                  src="/img/precipitation.png"
                  alt="Évolution des précipitations moyennes par province canadienne (2021-2023)"
                  fill
                  className="object-contain rounded-lg shadow-lg"
              />
          </div>
      </div>
  );
}