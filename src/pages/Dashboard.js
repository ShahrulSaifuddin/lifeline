import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Friend from "../components/friendCard";
import Modal from "../components/modalInfo";
import Spinner from "../components/spinner";
import { selectIsModalInfo } from "../redux/modalInfo";

function Dashboard() {
  // States
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Const
  const isModalInfoOpen = useSelector(selectIsModalInfo);
  const url = `https://randomuser.me/api/?seed=lll&page=${page}&results=25`;
  const totalPage = 500 / 25;

  // Function
  const fetchData = useCallback(async () => {
    setLoading(true);
    await axios
      .get(url)
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > totalPage) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = totalPage;
      }
      return prevPage;
    });
  };

  const handleSubmit = (e) => {
    e.prevenDefault();
  };

  if (page < 0 || page > totalPage) {
    alert(
      `You've reached the maximum number of pages. Limit to (${totalPage}) pages only`
    );
    setPage(1);
  }

  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
        <form className="page" onSubmit={handleSubmit}>
          <input
            type="text"
            id="page"
            name="page"
            placeholder="enter page number"
            value={page}
            onChange={(e) => setPage(e.target.value.replace(/^[a-z]+$/, ""))}
          />
        </form>
      </div>
      {loading ? (
        <div className="btn-container">
          <Spinner />
        </div>
      ) : (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>

          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      )}
      {loading || page < 0 || page > totalPage ? (
        <></>
      ) : (
        <section className="friends">
          <div className="container-pagination">
            {data &&
              data.map((friend, index) => {
                return <Friend key={index} {...friend} />;
              })}
          </div>
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>

            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        </section>
      )}
      {isModalInfoOpen && <Modal />}
    </main>
  );
}

export default Dashboard;
