

// import React from 'react';

// const Pagetion = ({ activePage, paginate, totallProduct, productPage }) => {
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(totallProduct / productPage); i++) {
//     pageNumber.push(i);
//   }

//   return (
//     <div>
//       <ul className='flex gap-5'>
//         {pageNumber.map((number) => (
//           <li key={number} className={`${number === activePage ? 'bg-red' : ''}`}>
//             <button onClick={()=>paginate(number)} href="#">{number}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagetion;



// import React, { useState } from 'react';

// const Pagetion = ({ totallProduct, productPage }) => {
//   const [activePage, setActivePage] = useState(1);
//   const pageNumber = [];

//   for (let i = 1; i <= Math.ceil(totallProduct / productPage); i++) {
//     pageNumber.push(i);
//   }

//   const paginate = (number) => {
//     setActivePage(number);
//     // Add your paginate logic here
//   };

//   return (
//     <div>
//       <ul className='flex gap-5 '>
//         {pageNumber.map((number) => (
//           <li key={number} className={`px-2 rounded-full ${number === activePage ? 'bg-red-500' : ''}`}>
//             <button type="button" onClick={() => paginate(number)}>{number}</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Pagetion;



import React, { useState } from 'react';

const Pagination = ({ totallProduct, productPage }) => {
  const [activePage, setActivePage] = useState(1);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totallProduct / productPage); i++) {
    pageNumber.push(i);
  }

  const paginate = (number) => {
    setActivePage(number);
    // Add your paginate logic here
  };

  const handlePrev = () => {
    if (activePage > 1) {
      paginate(activePage - 1);
    }
  };

  const handleNext = () => {
    if (activePage < pageNumber.length) {
      paginate(activePage + 1);
    }
  };

  return (
    <div>
      <ul className='flex gap-5 py-7'>
        <li className={`px-2 rounded-full`} onClick={handlePrev}>
          <button type="button">&lt;</button>
        </li>
        {pageNumber.map((number) => (
          <li key={number} className={`px-2 rounded-full ${number === activePage ? 'bg-red-500' : ''}`}>
            <button type="button" onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
        <li className={`px-2 rounded-full`} onClick={handleNext}>
          <button type="button">&gt;</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
