interface CheckBoxProps {
  TICKER_CODES: string[];
  selectedCode: string[];
  onCodeChange: (code: string) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  TICKER_CODES,
  selectedCode,
  onCodeChange,
}) => {
  return (
    <div>
      {TICKER_CODES.map((code) => (
        <label key={code}>
          <input
            type="checkbox"
            checked={selectedCode.includes(code)}
            onChange={() => onCodeChange(code)}
          />
          {code}
        </label>
      ))}
    </div>
  );
};

export default CheckBox;
