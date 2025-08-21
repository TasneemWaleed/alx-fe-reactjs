import { useQuery } from "react-query";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default function PostsComponent() {
  const {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60, // 1 minute: stays fresh (cached) for a while
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Posts</h2>
        <button onClick={() => refetch()}>
          {isFetching ? "Refreshing…" : "Refetch"}
        </button>
      </div>

      <ul style={{ marginTop: 12 }}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <strong>{post.title}</strong>
            <div style={{ color: "#555" }}>{post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
