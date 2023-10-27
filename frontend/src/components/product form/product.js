import React, { useState } from 'react';

function ProductForm(
    product,
    customID,
    production,
    rate,
    feed,
    handleInputChange,
    saveProduct
) {

  return (
    <div className="max-w-screen-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Production Table</h1>
      <form onSubmit={saveProduct}>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Custom Id:</label>
          <input
            type="number"
            name="customID"
            value={product?.customID}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Production:</label>
          <input
            type="number"
            name="production"
            placeholder='Egg Counts'
            value={product?.production}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Rate:</label>
          <input
            type="number"
            name="rate"
            placeholder='Today Egg Rate'
            value={product?.rate}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="flex text-sm font-medium">Feed:</label>
          <input
            type="number"
            name="feed"
            placeholder='In Quintals'
            value={product?.feed}
            onChange={handleInputChange}
            className="border rounded p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 font-semibold w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
