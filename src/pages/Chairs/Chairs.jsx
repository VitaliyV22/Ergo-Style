import React from 'react'

export const Chairs = () => {
  return (
    <div className='pt-12'>
    
    <h1 className='text-center text-indigo-800 font-bold text-4xl pt-2'>Shop our ergonomic desks collection</h1>
    <div className=" products lg:flex justify-between mr-10 ml-10 overflow-x-auto">
        {""}
        {PRODUCTS.slice(4).map((product) => (
          <Product data={product} />
        ))}

      </div>
    
    </div>
  )
}
