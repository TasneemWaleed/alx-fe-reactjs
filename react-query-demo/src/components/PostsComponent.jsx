import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const [page, setPage] = useState(1);

  const fetchPosts = async (page = 1) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`
    );
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

    // ✅ React Query caching & fetching options
    keepPreviousData: true,       // keep old data while fetching new page
    cacheTime: 1000 * 60 * 10,    // cache for 10 minutes
    staleTime: 1000 * 30,         // data considered fresh for 30s
    refetchOnWindowFocus: false,  // don't refetch when window is refocused
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts - Page {page}</h2>
      {data.map((post) => (
        <div key={post.id} className="mb-4">
          <h4 className="font-bold">{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>

      {isFetching && <p className="text-gray-500">Fetching new posts...</p>}
    </div>
  );
}

export default PostsComponent;
