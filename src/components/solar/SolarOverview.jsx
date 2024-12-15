import React from 'react';
import { Sun, Leaf, DollarSign, WindIcon, LucideWind, Droplets } from 'lucide-react';

export function SolarOverview() {
  return (
    <section className="py-16 bg-transparent rounded-2xl p-8 shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Renewable Energies
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl shadow-md">
            <Sun className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Solar Energy</h3>
            <p className="text-gray-600">
            It uses the sun's radiation to generate electricity or heat through 
            photovoltaic solar panels or solar concentration systems.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
            <LucideWind className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Wind Energy</h3>
            <p className="text-gray-600">
            It takes advantage of the power of the wind to generate 
            electricity through wind turbines or wind turbines.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
            <Droplets className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Hydroelectric Power</h3>
            <p className="text-gray-600">
            Usa la fuerza del agua en movimiento (ríos, embalses o corrientes) 
            para generar electricidad, generalmente a través de turbinas y generadores.
            </p>
          </div>
        </div>

        <div className="bg-transparent rounded-2xl p-8 shadow-lg">
          <h3 className="text-3xl text-center font-bold mb-7 text-gray-900">Data from the main energy producer in Colombia</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">+11,000 MW</p>
              <p className="text-gray-600">Installed hydroelectric capacity</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">70%</p>
              <p className="text-gray-600">Share of electricity generated</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">25%</p>
              <p className="text-gray-600">Reduction in recent decades</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-yellow-500">+50 Years</p>
              <p className="text-gray-600">Average useful life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
