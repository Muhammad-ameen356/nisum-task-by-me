import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import style from "./style.module.scss";

const Posts = ({ data }) => {
  const [companyName, ...rest] = data?.title?.toLowerCase()?.split(")");
  const jobDescription = rest?.join("");

  const date = new Date(+data?.time);

  const { jobrole } = JSON.parse(localStorage.getItem("profile")) || {};

  const jobRoleMatch = data?.title
    ?.toLowerCase()
    .indexOf(jobrole?.toLowerCase());

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
        <p className={style.companyName}>{companyName})</p>
        {jobRoleMatch > 0 && <AiTwotoneStar className={style.icon} />}
        <div className={style.jobDescription}>{jobDescription}</div>
        <p className={style.time}>
          {date?.getDate()}/{date?.getMonth() + 1}/{date?.getFullYear()} 
          {date?.getHours()}:{date?.getMinutes()}:{date?.getSeconds()}
        </p>
      </div>
    </a>
  );
};

export default Posts;
