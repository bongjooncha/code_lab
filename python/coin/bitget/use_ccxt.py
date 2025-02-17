import ccxt
from pprint import pprint
import os
from dotenv import load_dotenv

load_dotenv()

# Bitget 거래소 객체 생성
exchange = ccxt.bitget({
    'apiKey': os.getenv("BITGET_API_KEY"),
    'secret': os.getenv("BITGET_SECRET_KEY"),
    'password': os.getenv("BITGET_PASSPHRASE"),
    'options': {
        'defaultType': 'swap',  # 선물 거래를 위한 설정
    },
})

# 심볼 설정 (예: BTC/USDT)
symbol = 'BTC/USDT:USDT'

# SL/TP 주문 조회
# orders = exchange.get_bitget_client()
orders = exchange.fetch_open_orders(params={'trigger': True, 'planType': 'profit_loss'})
# orders = exchange.fetch_open_orders()

# 주문 정보 출력
pprint(orders)
