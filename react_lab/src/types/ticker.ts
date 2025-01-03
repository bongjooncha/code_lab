export interface TickerData {
  code: string;
  price: number;
  change_rate: number;
  timestamp: number;
}

export interface UpTickerData {
  type: string;
  code: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  acc_ask_volume: number;
  acc_bid_volume: number;
  acc_trade_price: number;
  acc_trade_price_24h: number;
  acc_trade_volume: number;
  acc_trade_volume_24h: number;
  ask_bid: string;
  change: string;
  change_price: number;
  change_rate: number;
  delisting_date: string | null;
  highest_52_week_date: string;
  highest_52_week_price: number;
  is_trading_suspended: boolean;
  lowest_52_week_date: string;
  lowest_52_week_price: number;
  market_state: string;
  market_warning: string;
  prev_closing_price: number;
  signed_change_price: number;
  signed_change_rate: number;
  stream_type: string;
  timestamp: number;
  trade_date: string;
  trade_price: number;
  trade_time: string;
  trade_timestamp: number;
  trade_volume: number;
}

export interface BiTickerData {
  e: string; // 이벤트 타입
  E: number; // 이벤트 시간
  s: string; // 심볼
  k: {
    t: number; // 캔들 시작 시간
    T: number; // 캔들 종료 시간
    s: string; // 심볼
    i: string; // 간격
    f: number; // 첫 거래 ID
    L: number; // 마지막 거래 ID
    o: string; // 시가
    c: string; // 종가
    h: string; // 고가
    l: string; // 저가
    v: string; // 기초자산 거래량
    n: number; // 거래 횟수
    x: boolean; // 캔들 종료 여부
    q: string; // 거래 대금
    V: string; // 매수 거래량
    Q: string; // 매수 거래 대금
    B: string; // 무시
  };
}
