// import { ContextAuth } from 'common/context/auth';
// import { useState, useEffect, useContext } from 'react';

// export default function useFetch(fetchFun) {
//   const [data, setData] = useState(null);
//   const {
//     state: { isLoggedIn },
//     dispatch: authDispatch,
//   } = useContext(ContextAuth);

//   const result = fetchFun(fetchData).then(res => {
//     console.log(res);
//     setData(res);
//   });

//   //   useEffect(() => {
//   //   }, [fetchFun, fetchData]);

//   return [data, result];
// }
