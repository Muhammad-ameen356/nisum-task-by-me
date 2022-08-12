import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "src/components/Loader/Loader";
import PostContext from "src/contexts/postContext";
import Posts from "src/components/Posts";
import { Col, Container, Row } from "react-bootstrap";
import style from "./styles.module.scss";

const Home = () => {
  // const {
  //   postState: { postLoading, posts },
  //   loadMore,
  //   allJobData,
  // } = useContext(PostContext);

  return (
    <div>
      {/* {postLoading ? (
        <div
          style={{
            display: "flex",
            justiyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Loader loading={postLoading} size={200} color="#FF5A00" />
        </div>
      ) : (
        <>
          <Container>
            <Row>
              {allJobData?.map((item, index) => {
                return (
                  <Col md={4}>
                    <Posts data={item} />{" "}
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className={style.loadMoreBtn}>
            <button onClick={() => loadMore()}>Load more </button>
          </div>
        </>
      )} */}
    </div>
  );
};

export default Home;
