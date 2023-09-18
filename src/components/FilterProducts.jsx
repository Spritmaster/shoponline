import React, { useState } from 'react';
import { ProductsSelect, PriceOfProduct, ShipingRadio } from '.';
import { Link, useLoaderData } from 'react-router-dom';
import { SearchProduct } from './SearchProduct';

const FilterProducts = () => {
  const { allProducts } = useLoaderData();
  console.log(allProducts);


  const sortByArr = ['a-z', 'z-a', 'high', 'low'];


  const handleSubmit=(e)=> {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
  }
  return (
    <div className='mt-10'>
      <form
        
        className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center"
        onSubmit={handleSubmit}
        action=''
      >
        <SearchProduct
          labelFor={'search'}
          labelname={'Search Product'}
          type={'search'}
          name={'search'}
          InputIdId={'search'}
        />
  
        <ProductsSelect
          labelFor={'category'}
          labelname={'Select category'}
          name={'category'}
          selectId={'category'}
          optionArr={allProducts.meta.categories}
        />
        <ProductsSelect
          labelFor={'company'}
          labelname={'Select Company'}
          name={'company'}
          selectId={'company'}
          optionArr={allProducts.meta.companies}
        />
        <ProductsSelect
          labelFor={'sort'}
          labelname={'Sort By'}
          name={'sort'}
          selectId={'sort'}
          optionArr={sortByArr}
        />

        <PriceOfProduct
          labelname={'Select'}
          labelFor={'price'}
          type={'range'}
          name={'price'}
          minPrice={0}
          maxPrice={100000}
          inputId={'price'}
        />
        <ShipingRadio
          labelname={'shipping'}
          labelFor={'shipping'}
          type={'checkbox'}
          name={'shipping'}
          inputId={'shipping'}
        />

        <button type="submit" className='btn btn-primary btn-sm text-info'>SEARCH</button>
        <Link className='btn btn-secondary btn-sm text-info ' to={'/products'}>RESET</Link>
      </form>

    </div>
  );
};

export default FilterProducts;