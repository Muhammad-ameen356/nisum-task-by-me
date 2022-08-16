import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosinstance from "src/utils/axios/axiosInstance";

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [postIDS, setPostIDS] = useState([]);
  const [data, setData] = useState([]);
  const [startCount, setStartCount] = useState(0);
  const [endCount, setEndCount] = useState(9);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState([]);

  let idArr = [];
  const fetchPost = () => {
    axiosinstance({
      method: "get",
      url: "/jobstories.json",
    })
      .then((res) => {
        idArr = res?.data;
        setPostIDS(res?.data);
        fetchPostById(startCount, endCount, idArr);
      })
      .catch((err) => {
        toast.error(err);
        console.log(err);
      });
  };

  const fetchPostById = (initCount, finalCount, ids) => {
    const countData = ids.slice(initCount, finalCount);

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

    Promise.allSettled(mapArr)
      .then((success) => {
        console.log(success);
        setData(success);
        setInitialLoading(false);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "errerrerr");
        setInitialLoading(false);
        setLoading(false);
      });
  };

  const loadMore = () => {
    console.log(startCount, endCount);
    setStartCount(endCount);
    setEndCount(endCount + 6);

    console.log(postIDS.length);
    if (endCount > postIDS.length) {
      toast.warning("No More Jobs Found");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (endCount < postIDS.length) {
      setLoading(true);
      fetchPostById(startCount, endCount, postIDS);
    }
  }, [startCount]);

  return (
    <PostContext.Provider
      value={{ loadMore, data, initialLoading, loading, postData, setPostData }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
