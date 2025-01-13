import requests
import hmac
import hashlib
from datetime import datetime, timezone
from dotenv import load_dotenv
import os

load_dotenv()


# Bitget API 정보
api_key = os.getenv("BITGET_API_KEY")
secret_key = os.getenv("BITGET_SECRET_KEY")
passphrase = os.getenv("BITGET_PASSPHRASE")
base_url = "https://api.bitget.com"

# 엔드포인트와 쿼리 파라미터
endpoint = "/api/v2/mix/account/positions"
params = "productType=usdt-futures&symbol=BTCUSDT"

# 현재 UTC 시간
timestamp = datetime.now(timezone.utc).isoformat()

# 서명 생성
message = f"{timestamp}GET{endpoint}?{params}"
signature = hmac.new(
    secret_key.encode('utf-8'),
    message.encode('utf-8'),
    hashlib.sha256
).hexdigest()

# 요청 헤더
headers = {
    "Content-Type": "application/json",
    "ACCESS-KEY": api_key,
    "ACCESS-SIGN": signature,
    "ACCESS-TIMESTAMP": timestamp,
    "ACCESS-PASSPHRASE": passphrase
}

# API 요청
url = f"{base_url}{endpoint}?{params}"
response = requests.get(url, headers=headers)

# 결과 출력
print(response.json())
