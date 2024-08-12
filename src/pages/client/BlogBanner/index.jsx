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
    fetchApi(getApiEnv() + `banner/${id}`)
      .then((data) => setBanner(data))
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
      
      <img src={banner.picture} alt={banner.title} />
      <h1>{banner.title}</h1>
      <p>{banner.viewer}</p>
    </div>
  );
};

export default BlogBanner;
