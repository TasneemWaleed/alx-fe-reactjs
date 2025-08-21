import React from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // 👇 caching behavior
    staleTime: 1000 * 60 * 5, // data stays fresh for 5 minutes
    refetchOnWindowFocus: false, // don't refetch automatically on window focus
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id} className="mb-4">
          <h4 className="font-bold">{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
      {isFetching && <p className="text-gray-500">Updating in background...</p>}
    </div>
  );
}

export default PostsComponent;
