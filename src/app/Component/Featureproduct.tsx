import React from 'react'
import Image from 'next/image'

function Featureproduct() {
  return (
    <div>
       <section className="py-8 px-4 bg-white shadow-lg max-w-7xl mx-auto mt-8">
      {/* Title Section */}
      <h1 className="text-2xl font-bold text-center mb-2">Featured Products</h1>
      <p className="text-gray-500 text-center">Problems trying to resolve the conflict between</p>

      {/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 mb-24">
        {/* Product Card 1 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-5.png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-5 (1).png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-5 (2).png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-5 (3).png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>
      </div>


      
      {/* Product Grid Section 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {/* Product Card 5 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-2-1.png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 6 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-2-2.png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 7 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-2-3.png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Product Card 8 */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 transition-transform">
          <img
            src="/images/product-cover-2-4.png"
            alt="Product Image"
            className="w-full rounded-t-lg"
          />
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">Graphic Design</h3>
            <p className="text-gray-500">English Department</p>
            <div className="text-lg font-bold text-gray-800 mt-2">$11.68 - $34.48</div>
            <div className="flex justify-center gap-2 mt-3">
              <span className="w-4 h-4 rounded-full bg-red-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-blue-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-green-500 border border-gray-300"></span>
              <span className="w-4 h-4 rounded-full bg-orange-500 border border-gray-300"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Featureproduct