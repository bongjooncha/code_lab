import websocket
import json
import time
import hmac
import hashlib
import os
import dotenv

dotenv.load_dotenv()

# Bitget API 정보
api_key = os.getenv("BITGET_API_KEY")
secret_key = os.getenv("BITGET_SECRET_KEY")
passphrase = os.getenv("BITGET_PASSPHRASE")

# WebSocket URL
url = "wss://ws.bitget.com/mix/v1/stream"

def generate_signature(api_key, secret_key, passphrase):
    timestamp = str(int(time.time()))
    message = f"{timestamp}GET/user/login{passphrase}"
    signature = hmac.new(
        secret_key.encode('utf-8'),
        message.encode('utf-8'),
        hashlib.sha256
    ).hexdigest()
    return timestamp, signature

def on_open(ws):
    print("WebSocket connected")

    # 인증 요청
    timestamp, signature = generate_signature(api_key, secret_key, passphrase)
    login_payload = {
        "op": "login",
        "args": 
        [
            {
                "apiKey":api_key,
                "passphrase":passphrase,
                "timestamp":timestamp,
                "sign":signature,
            }
        ]
    }
    ws.send(json.dumps(login_payload))
    print(json.dumps(login_payload))

    # 주문 이벤트 구독 요청
    subscribe_payload = {
        "op": "subscribe",
        "args": [
            {
                "instType": "USDT-FUTURES",
                "channel": "account",
                "coin": "default"
            }
        ]
    }
    ws.send(json.dumps(subscribe_payload))

def on_message(ws, message):
    data = json.loads(message)
    print("Received:", json.dumps(data, indent=4))

def on_error(ws, error):
    print("Error:", error)

def on_close(ws, close_status_code, close_msg):
    print("WebSocket closed")

# WebSocket 설정
ws = websocket.WebSocketApp(
    url,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)

# WebSocket 실행
ws.run_forever()
