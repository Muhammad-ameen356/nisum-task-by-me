import React, { createContext, useEffect, useReducer, useState } from "react";
import postReducer, { POST_INITIAL_STATE } from "src/reducers/postReducer";
import ACTIONS from "src/constant/constant";
import { toast } from "react-toastify";
import axiosinstance from "src/utils/axios/axiosInstance";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postState, postDispatch] = useReducer(postReducer, POST_INITIAL_STATE);
  const [responseData, setResponseData] = useState([]);

  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(9);

  const [jobData, setJobData] = useState([]);
  const [allJobData, setAllJobData] = useState([]);

  useEffect(() => {
    if (!postState?.posts || postState?.posts?.length === 0) {
      fetchPost();
    }
  }, []);

  let abc = 0;

  const fetchPost = () => {
    axiosinstance({
      method: "get",
      url: "/jobstories.json",
    })
      .then((res) => {
        console.log(res);
        setResponseData(res?.data);
        fetchPostById(res?.data);
        abc++;
      })
      .catch((err) => {
        toast.error(err);
      })
      .finally(() => {
        postDispatch({ type: ACTIONS.GET_POST_FINISH });
      });
  };

  const fetchPostById = (res) => {
    const countData = res.slice(startCount, endCount);
    console.log(countData);
    const dataArr = [];
    countData?.map((item, index) => {
      axiosinstance({
        method: "get",
        url: `/item/${item}.json`,
      })
        .then((res) => {
          console.log(res);
          dataArr.push(res?.data);
          setJobData(dataArr);
          // postDispatch({type: jobData, payload: })
        })
        .catch((err) => {
          toast.error(err);
        })
        .finally(() => {
          postDispatch({ type: ACTIONS.GET_POST_FINISH });
        });
    });
    if (abc < 9) {
      setAllJobData(dataArr);
    }
    return jobData;
  };

  const loadMore = () => {
    if (allJobData.length < responseData.length) {
      setStartCount(endCount);
      setEndCount(endCount + 6);
      const iteratedData = fetchPostById(responseData);

      setAllJobData([...allJobData, ...iteratedData]);
    } else {
      toast.error("No More Data Found");
    }
  };

  console.log(allJobData);

  return (
    <PostContext.Provider value={{ postState, loadMore, allJobData }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
