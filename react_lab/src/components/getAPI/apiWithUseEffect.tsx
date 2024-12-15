import { useEffect, useState, useRef } from "react";

const ApiWithUseEffect = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${query}`
        );
        console.log(`https://api.github.com/search/repositories?q=${query}`);
        console.log(response.json());
        const data = await response.json();
        setRepos(data.item || []);
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);
  const countRef = useRef(0);
  countRef.current++;

  return (
    <div>
      <div>
        <h2>GitHub Repo Search (useEffect)</h2>
        <input
          type="text"
          placeholder="Search repositories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
          {repos.map((repo) => (
            <li>{repo}</li>
          ))}
        </ul>
        <div>
          <div>랜더링 된 횟수(0 시작) : {countRef.current}</div>
          <div>{query}</div>
          <div>{JSON.stringify(repos)}</div>
        </div>
      </div>
    </div>
  );
};

export default ApiWithUseEffect;
