import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './ProductList.css'
function ProductList() {

  const [products, setProducts] = useState([])
  const [pageNumber, setPageNumber] = useState(0)


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      console.log(response.data)
      setProducts(response.data)


    })
  }, [])


  const usersPage = 10

  const pagesVisited = pageNumber * usersPage


  const diplayProducts = products.slice(pagesVisited, pagesVisited + usersPage)
    .map((products) => {
      return (
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {products.title}
            </th>
            <td class="py-4 px-6">
              {products.category}
            </td>
            <td class="py-4 px-6">
              {products.price}
            </td>
            <td class="py-4 px-6">
              {products.description}
            </td>
            <td class="py-4 px-6">
              <img src={products.image} style={{ width: 50, height: 50 }} alt='p'></img>
            </td>
          </tr>
        </tbody>
      )
    })

  const pageCount = Math.ceil(products.length / usersPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }


  return (
    <div class=''>
      <h1 class='text-center font-bold text-xl'>Product List </h1>
      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                title


              </th>
              <th scope="col" class="py-3 px-6">
                category

              </th>
              <th scope="col" class="py-3 px-6">
                price
              </th>

              <th scope="col" class="py-3 px-6">
                description

              </th>

              <th scope="col" class="py-3 px-6">
                image

              </th>
            </tr>
          </thead>


          {diplayProducts}



     
       

        </table>

        <div className='app'>
          <ReactPaginate

            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"paginationBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}

          />
        </div>
       
      </div>

     
    </div>
  )
}

export default ProductList
