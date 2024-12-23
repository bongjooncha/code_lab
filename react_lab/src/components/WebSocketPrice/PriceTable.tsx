import { TickerData } from "types/ticker";

interface PriceTableProps {
  data: { [key: string]: TickerData };
  TICKER_CODES: string[];
}

const PriceTable: React.FC<PriceTableProps> = ({ data, TICKER_CODES }) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>타임스탬프</th>
          <th style={tableHeaderStyle}>코드</th>
          <th style={tableHeaderStyle}>현재가</th>
          <th style={tableHeaderStyle}>변동율</th>
        </tr>
      </thead>
      <tbody>
        {TICKER_CODES.map((code) => `KRW-${code}`).map((code) => {
          const item = data[code];
          if (!item) return null;
          return (
            <tr key={code}>
              <td style={tableCellStyle}>
                {new Date(item.timestamp).toLocaleString()}
              </td>
              <td style={tableCellStyle}>{code.replace("KRW-", "")}</td>
              <td style={tableCellStyle}>
                {item.trade_price.toLocaleString()} 원
              </td>
              <td style={tableCellStyle}>
                {(item.change_rate * 100).toFixed(2)}%
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PriceTable;

const tableHeaderStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
  backgroundColor: "#f2f2f2",
  textAlign: "left",
};

const tableCellStyle: React.CSSProperties = {
  border: "1px solid #ddd",
  padding: "8px",
};
