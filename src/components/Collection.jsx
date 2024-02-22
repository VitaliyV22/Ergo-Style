
import { PRODUCTS } from "../data";
import { Product } from "./Product";

export const Collection = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-indigo-700 sm:text-5xl">
          Which Ergo Chair fits you best?
        </h2>
      </div>
      <div className=" products lg:flex justify-between mr-10 ml-10 overflow-x-auto">
        {""}
        {PRODUCTS.slice(0, 3).map((product) => (
          <Product data={product} />
        ))}

      </div>
    </>
  );
};
