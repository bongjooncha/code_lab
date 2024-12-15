import React, { useRef } from "react";
import { useQuery, useQueryClient } from "react-query";

// 데이터 타입 정의
interface DataItem {
  id: string;
  value: string;
}

interface ApiResponse {
  data: DataItem[];
}

// 초기 데이터를 가져오는 함수
const fetchInitialData = async (): Promise<ApiResponse> => {
  const response = await fetch("/api/initial-data");
  if (!response.ok) {
    throw new Error("Failed to fetch initial data");
  }
  return response.json();
};

const WebSocketWithReactQuery: React.FC = () => {
  const queryClient = useQueryClient();
  const countRef = useRef(0);
  // React Query로 초기 데이터 요청
  const { data, isLoading, isError } = useQuery<ApiResponse>(
    "data",
    fetchInitialData
  );

  return (
    <div>
      <h2>React Query</h2>

      <ul>
        {isLoading && <li>Loading...</li>}
        {isError && <li>Error loading data</li>}
        {!isLoading &&
          !isError &&
          data?.data.map((item) => <li key={item.id}>{item.value}</li>)}
      </ul>
      <div>
        <div>랜더링 된 횟수(0 시작) : {countRef.current}</div>
      </div>
      <div>
        <strong>{JSON.stringify(data)}</strong>
      </div>
    </div>
  );
};

export default WebSocketWithReactQuery;
