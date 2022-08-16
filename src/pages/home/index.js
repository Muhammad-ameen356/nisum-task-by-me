import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "src/components/Loader/Loader";
import Posts from "src/components/Posts";
import PostContext from "src/contexts/postContext";
import style from "./styles.module.scss";

const Home = () => {
  const { loadMore, data, initialLoading, loading, postData, setPostData } =
    useContext(PostContext);

  useEffect(() => {
    console.log("this is run home useEffect");
    console.log(postData, "postDatapostDatapostData");
    console.log(data, "datadatadata");
    setPostData([...postData, ...data]);
  }, [data]);

  return (
    <div>
      {initialLoading ? (
        <div className={style.loader}>
          <Loader
            name="BeatLoader"
            loading={initialLoading}
            size={40}
            color="#FF5A00"
          />
        </div>
      ) : (
        <>
          <Container>
            <Row>
              {postData?.map((item, index) => {
                return (
                  <Col md={4} key={item?.value?.id * index}>
                    <Posts data={item.value} />
                  </Col>
                );
              })}
            </Row>
          </Container>

          {loading ? (
            <div className={style.loadMoreBtn}>
              <Loader
                name="BeatLoader"
                loading={loading}
                size={40}
                color="#FF5A00"
              />
            </div>
          ) : (
            <div className={style.loadMoreBtn}>
              <button onClick={() => loadMore()}>Load more </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
