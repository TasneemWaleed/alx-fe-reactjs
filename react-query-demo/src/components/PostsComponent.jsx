import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent({ page }) {
  const fetchPosts = async (page = 1) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`);
    return res.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts", page],
    queryFn: () => fetchPosts(page),
    // 👇 caching options
    cacheTime: 1000 * 60 * 10, // 10 minutes
    keepPreviousData: true,    // keep old data during new fetch
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts (Page {page})</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isFetching && <p>Fetching new data...</p>}
    </div>
  );
}

export default PostsComponent;
