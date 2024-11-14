
import React, {  useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Images } from '../Data/data'; 
import Picture from './Picture';


const items = [...Images];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
             currentItems.map((item,index) => (
                <div className='md:w-[45%] lg:w-[30%] mb-5'>
                    <Picture  key={index}  imageName={item.name}  />
                     <div className='flex justify-between py-5'>
                        <h1 className={`text-xl font-dm  `}>{item.product}  </h1>
                        <h2 className='text-xl font-dm'>{item.price}</h2>
                     </div>
                </div>
              ))}
    </>
  );}


const Pagination = ({ itemsPerPage}) => {
      
    // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <> 
       <div className='md:flex md:flex-wrap gap-x-5 justify-between'>
           <Items currentItems={currentItems} />
       </div>
      <ReactPaginate
        breakLabel="..."
        previousLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4 }
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousClassName='hidden'
        nextClassName="hidden"
        containerClassName="flex flex-wrap gap-x-6 gap-y-2 mt-5  px-5 lg:px-0"
        pageLinkClassName="inline-block  border border-solid border-[#f0f0f0] py-2 px-3.5  font-dm font-regular text-base hover:bg-black text-black hover:text-white"
      />
       <span className='font-dm font-regular text-secondary ml-0 sm:ml-4 mt-3 lg:absolute lg:bottom-0 lg:right-0  lg:mt-0 inline-block'>Product from {itemOffset} to {itemOffset + itemsPerPage } of {items.length}  </span>
    </>
  );
};
 
export default Pagination;