import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Our Values</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose EcoThreads?
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <Leaf size={24} />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Sustainable Materials</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                All our products are made from eco-friendly and sustainable materials.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <Recycle size={24} />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Ethical Production</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                We ensure fair wages and safe working conditions throughout our supply chain.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <Heart size={24} />
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">Quality Guarantee</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Durable products that are made to last and reduce waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};