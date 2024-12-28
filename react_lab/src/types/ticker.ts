export interface TickerData {
  code: string;
  price: number;
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
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  p: string; // Mark price
  i: string; // Index price
  P: string; // Estimated Settle Price
  r: string; // Funding rate
  T: number; // Next funding time
}
