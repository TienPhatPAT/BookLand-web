import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import classes from "./AuthorDetail.module.scss";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import Image from "../../../components/Image";
import { fetchApi, getApiEnv } from "../../../utils/api";
import BookList from "./../../../components/BookList";

const AuthorDetail = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authorData = await fetchApi(getApiEnv() + "author/" + id);
        console.log("Author Data:", authorData); // Kiểm tra dữ liệu tác giả

        const booksData = await fetchApi(getApiEnv() + "books");
        console.log("Books Data:", booksData); // Kiểm tra dữ liệu sách

        // Lọc sách theo authorId
        const filteredBooks = booksData.filter(
          (book) => book.author && book.author.id === id
        );
        console.log("Filtered Books:", filteredBooks); // Kiểm tra dữ liệu sách đã lọc

        setAuthor(authorData);
        setBooks(filteredBooks);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, [id]);

  if (author === null || author === undefined) {
    return <p>Đang tải...</p>;
  }

  return (
    <Container
      sx={{
        maxWidth: "calc(100% - 6rem) !important",
        padding: "0 !important",
        margin: "0 0 12rem auto !important",
      }}
      className={classes.authorDetailWrapper}
    >
      <BreadcrumbBar path={[{ label: author.name, url: "" }]} />
      <div className={clsx(classes.authorDetail, "d-flex")}>
        <Image url={author.profilePicture} className={classes.avatar} />
        <div className={classes.infoAuthor}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "1.8rem",
              fontWeight: "600",
            }}
            className={classes.name}
          >
            {author.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
            }}
            className={classes.description}
          >
            {author.description}
          </Typography>
        </div>
      </div>

      {/* Sách của cùng tác giả */}
      <div className={classes.booksByAuthor}>
        <BookList heading="Sách của cùng tác giả" bookList={books} />
      </div>
    </Container>
  );
};

export default AuthorDetail;
