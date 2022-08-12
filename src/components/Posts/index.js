import React from "react";
import style from "./style.module.scss";

const Posts = ({ data }) => {
  const [companyName, ...rest] = data?.title?.toLowerCase()?.split("is");
  const jobDescription = rest?.join("is");

  const date = new Date(+data?.time);
  console.log(date.getDate());

  const { jobrole } = JSON.parse(localStorage.getItem("profile"));

  console.log(jobrole);

  const filterData = data?.title?.split(" ");

  const abc = filterData.indexOf("hiring");

  console.log(abc);

  return (
    <a
      href={`${
        data?.url
          ? data?.url
          : `https://news.ycombinator.com/item?id=${data?.id}`
      }`}
      target="_blank"
      rel="noreferrer"
    >
      <div className={style.boxContainer}>
        <p className={style.companyName}>{companyName}</p>
        <div className={style.jobDescription}>is{jobDescription}</div>
        <p className={style.time}>
          {date?.getDate()}/{date?.getMonth() + 1}/{date?.getFullYear()}&nbsp;{" "}
          {date?.getHours()}:{date?.getMinutes()}:{date?.getSeconds()}
        </p>
      </div>
    </a>
  );
};

export default Posts;
