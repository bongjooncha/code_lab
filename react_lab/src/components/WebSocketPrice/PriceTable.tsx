import { TickerData } from "types/ticker";

interface PriceTableProps {
  data: { [key: string]: TickerData };
  TICKER_CODES: string[];
  c_unit: string;
}

const PriceTable: React.FC<PriceTableProps> = ({
  data,
  TICKER_CODES,
  c_unit,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th style={tableHeaderStyle}>타임스탬프</th>
          <th style={tableHeaderStyle}>코드</th>
          <th style={tableHeaderStyle}>현재가</th>
          <th style={tableHeaderStyle}>변화량</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((code) => {
          const item = data[code];
          if (!item) return null;
          return (
            <tr key={code}>
              <td style={tableCellStyle}>
                {new Date(item.timestamp).toLocaleString()}
              </td>
              <td style={tableCellStyle}>{code}</td>
              <td style={tableCellStyle}>
                {item.price.toLocaleString()}
                {c_unit}
              </td>
              <td style={tableCellStyle}>{item.change_rate.toFixed(2)}%</td>
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
