import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi, getApiEnv } from "../../../utils/api";
import classes from "./BlogBanner.module.scss";

const BlogBanner = () => {
  const { id } = useParams();
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi(getApiEnv() + `/baiviet/${id}`)
      .then((data) => setBanner(data?.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!banner) {
    return <div>No banner found</div>;
  }

  return (
    <div className={classes.banner_detail}>
      <img src={banner.img} alt={banner.tieude} />
      <h1>{banner.tieude}</h1>
      <p style={{ fontSize: "16px", color: "#fff" }}>{banner.noidung}</p>
      <p>{banner.luotxem}</p>
    </div>
  );
};

export default BlogBanner;
