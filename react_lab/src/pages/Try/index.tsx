import React, { useEffect, useState } from "react";
import axios from "axios";

interface CandleData {
  time: string;
  percentChange: number;
}

interface BinanceData {
  fourHour: CandleData[];
  oneHour: { time: string; subIntervals: CandleData[] }[];
  fifteenMin: { time: string; subIntervals: CandleData[] }[];
}

const BinanceTable: React.FC = () => {
  const [data, setData] = useState<BinanceData>({
    fourHour: [],
    oneHour: [],
    fifteenMin: [],
  });

  const fetchKlines = async (
    symbol: string,
    interval: string,
    limit: number
  ): Promise<any[]> => {
    const endpoint = "https://api.binance.com/api/v3/klines";
    try {
      const response = await axios.get(endpoint, {
        params: { symbol, interval, limit },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching Binance data:", error);
      return [];
    }
  };

  const calculatePercentChange = (candles: any[]): CandleData[] => {
    return candles.map((candle) => {
      const open = parseFloat(candle[1]);
      const close = parseFloat(candle[4]);
      const percentChange = ((close - open) / open) * 100;
      return { time: new Date(candle[0]).toLocaleString(), percentChange };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const symbol = "BTCUSDT";

      // 4시간봉 데이터 가져오기
      const fourHourCandles = await fetchKlines(symbol, "4h", 6);
      const fourHourData = calculatePercentChange(fourHourCandles);

      // 1시간봉 데이터 가져오기
      const oneHourCandles = await fetchKlines(symbol, "1h", 24); // 4시간 * 6개
      const oneHourData = fourHourData.map((_, index) => {
        const startIndex = index * 4;
        const subCandles = oneHourCandles.slice(startIndex, startIndex + 4);
        const subData = calculatePercentChange(subCandles);
        return { time: fourHourData[index].time, subIntervals: subData };
      });

      // 15분봉 데이터 가져오기
      const fifteenMinCandles = await fetchKlines(symbol, "15m", 96); // 15분 * 4개 * 6개
      const fifteenMinData = oneHourData.map((hour, hourIndex) => {
        const startIndex = hourIndex * 4 * 4; // 4시간 = 16개의 15분
        const subCandles = fifteenMinCandles.slice(startIndex, startIndex + 16);
        const subData = calculatePercentChange(subCandles);
        return { time: hour.time, subIntervals: subData };
      });

      setData({
        fourHour: fourHourData,
        oneHour: oneHourData,
        fifteenMin: fifteenMinData,
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "20px" }}>
      <h1>Binance Data</h1>

      <h2>4시간봉 데이터</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>시간</th>
            <th>등락 퍼센트</th>
          </tr>
        </thead>
        <tbody>
          {data.fourHour.map((row, index) => (
            <tr key={`4h-${index}`}>
              <td>{row.time}</td>
              <td>{row.percentChange.toFixed(2)}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>1시간봉 데이터 (4시간 하위)</h2>
      {data.oneHour.map((row, index) => (
        <div key={`1h-${index}`}>
          <h3>4시간봉: {row.time}</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>1시간</th>
                <th>등락 퍼센트</th>
              </tr>
            </thead>
            <tbody>
              {row.subIntervals.map((subRow, subIndex) => (
                <tr key={`1h-${index}-${subIndex}`}>
                  <td>{subRow.time}</td>
                  <td>{subRow.percentChange.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>15분봉 데이터 (1시간 하위)</h2>
      {data.fifteenMin.map((row, index) => (
        <div key={`15m-${index}`}>
          <h3>1시간봉: {row.time}</h3>
          <table border={1}>
            <thead>
              <tr>
                <th>15분</th>
                <th>등락 퍼센트</th>
              </tr>
            </thead>
            <tbody>
              {row.subIntervals.map((subRow, subIndex) => (
                <tr key={`15m-${index}-${subIndex}`}>
                  <td>{subRow.time}</td>
                  <td>{subRow.percentChange.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BinanceTable;
