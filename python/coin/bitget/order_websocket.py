import os
import time
import hmac
import hashlib
import json
import base64
import websocket
import dotenv

dotenv.load_dotenv()

# 🔹 환경 변수에서 API 정보 가져오기
API_KEY = os.getenv("BITGET_API_KEY")
SECRET_KEY = os.getenv("BITGET_SECRET_KEY")
PASSPHRASE = os.getenv("BITGET_PASSPHRASE")

# 🔹 Bitget Private WebSocket 주소
WS_URL = "wss://ws.bitget.com/v2/ws/private"


# 🔹 올바른 서명 생성 (Base64 인코딩 추가)
def generate_signature(timestamp):
    sign_string = f"{timestamp}GET/user/verify"
    signature = hmac.new(SECRET_KEY.encode(), sign_string.encode(), hashlib.sha256).digest()
    return base64.b64encode(signature).decode()  # ✅ Base64 인코딩 필수!

# 🔹 WebSocket 이벤트 핸들러
def on_open(ws):
    print("✅ WebSocket 연결 성공!")

    # 🛠 타임스탬프 & 서명 생성
    timestamp = str(int(time.time()))
    signature = generate_signature(timestamp)

    # 🔐 로그인 요청 (올바른 형식)
    login_payload = {
        "op": "login",
        "args": [{
            "apiKey": API_KEY,
            "passphrase": PASSPHRASE,
            "timestamp": timestamp,  # ✅ 초 단위
            "sign": signature  # ✅ Base64 인코딩된 sign
        }]
    }
    print(login_payload)
    ws.send(json.dumps(login_payload))
    print("🔐 로그인 요청:", login_payload)

def on_message(ws, message):
    data = json.loads(message)
    print("📩 받은 메시지:", data)

    # ✅ 로그인 성공 시 구독 요청
    if data.get("event") == "login" and data.get("code") == "0":
        print("✅ 로그인 성공!")

        # 🛠 주문 정보 구독
        subscribe_payload = {
            "op": "subscribe",
            "args": [{
                "instType": "MC",
                "channel": "positions",
                "instId": "default"
            }]
        }
        ws.send(json.dumps(subscribe_payload))
        print("📡 주문 정보 구독 요청!")

def on_error(ws, error):
    print("❌ 에러 발생:", error)

def on_close(ws, close_status_code, close_msg):
    print("🔌 WebSocket 연결 종료")

# WebSocket 실행
ws = websocket.WebSocketApp(WS_URL, on_open=on_open, on_message=on_message, on_error=on_error, on_close=on_close)
ws.run_forever()
