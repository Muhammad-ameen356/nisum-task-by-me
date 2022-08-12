import React, { createContext, useEffect, useReducer, useState } from "react";
import postReducer, { POST_INITIAL_STATE } from "src/reducers/postReducer";
import ACTIONS from "src/constant/constant";
import { toast } from "react-toastify";
import axiosinstance from "src/utils/axios/axiosInstance";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  // const [postState, postDispatch] = useReducer(postReducer, POST_INITIAL_STATE);
  // const [responseData, setResponseData] = useState([]);
  const [postIDS, setPostIDS] = useState([]);
  const [data, setData] = useState([]);

  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(9);

  // const [jobData, setJobData] = useState([]);
  // const [allJobData, setAllJobData] = useState([]);

  // useEffect(() => {
  //   if (!postState?.posts || postState?.posts?.length === 0) {
  //     fetchPost();
  //   }
  // }, []);

  // let abc = 0;

  // const fetchPost = () => {
  //   axiosinstance({
  //     method: "get",
  //     url: "/jobstories.json",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setResponseData(res?.data);
  //       fetchPostById(res?.data);
  //       abc++;
  //     })
  //     .catch((err) => {
  //       toast.error(err);
  //     })
  //     .finally(() => {
  //       postDispatch({ type: ACTIONS.GET_POST_FINISH });
  //     });
  // };
  // const promiseArr = [];
  // const fetchPostById = (res) => {
  //   const countData = res.slice(startCount, endCount);
  //   console.log(countData);
  //   const dataArr = [];
  //   const mapArr = countData?.map((item, index) => {
  //     const promise = new Promise((resolve, reject) => {
  //       axiosinstance({
  //         method: "get",
  //         url: `/item/${item}.json`,
  //       })
  //         .then((res) => {
  //           resolve(res?.data);
  //           // postDispatch({type: jobData, payload: })
  //         })
  //         .catch((err) => {
  //           reject(err);
  //         })
  //     });
  //     return promise;
  //   });
  //   console.log(mapArr, "promiseArrpromiseArrpromiseArrpromiseArr");
  //   const aaaa = Promise.allSettled(mapArr).then((success) => {
  //     console.log(success,'=====+>>>')
  //   })
  //     .then((val) => {
  //       console.log(val, "valval");
  //     })
  //     .catch((err) => {
  //       console.log(err, "errerrerr");
  //     });

  //   console.log(aaaa, "aaaaaaaaaaaa");
  //   if (abc < 9) {
  //     setAllJobData(aaaa);
  //   }

  //   return jobData;
  // };

  // const loadMore = () => {
  //   if (allJobData.length < responseData.length) {
  //     setStartCount(endCount);
  //     setEndCount(endCount + 6);
  //     const iteratedData = fetchPostById(responseData);
  //     console.log(iteratedData);
  //     setAllJobData([...allJobData, ...iteratedData]);
  //   } else {
  //     toast.error("No More Data Found");
  //   }
  // };
  let idArr = [];
  const fetchPost = () => {
    axiosinstance({
      method: "get",
      url: "/jobstories.json",
    })
      .then((res) => {
        // console.log(res);
        idArr = res?.data;
        setPostIDS(res?.data);
        fetchPostById();
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {});
  };

  const fetchPostById = () => {
    const countData = idArr.slice(startCount, endCount);
    console.log(countData, "postIDSpostIDS");
    console.log(postIDS, "postIDSpostIDS");

    const mapArr = countData?.map((item, index) => {
      const promise = new Promise((resolve, reject) => {
        axiosinstance({
          method: "get",
          url: `/item/${item}.json`,
        })
          .then((res) => {
            resolve(res?.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
      return promise;
    });

    console.log(mapArr);

    Promise.allSettled(mapArr)
      .then((success) => {
        console.log(success, "=====+>>>");
        setData();
      })
      .catch((err) => {
        console.log(err, "errerrerr");
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return <PostContext.Provider value={{}}>{children}</PostContext.Provider>;
};

export default PostContext;
