from get_session import Config
from telegram import read_chat_ids
import asyncio
import json
import os

async def main():
    client = Config.CLIENT_NAME
    await client.connect()  # 클라이언트 연결
    
    # 인증 확인
    if not await client.is_user_authorized():
        await client.send_code_request(Config.TELEGRAM_PHONE)
        await client.sign_in(Config.TELEGRAM_PHONE, input('Enter the code: '))
    
    result = await read_chat_ids(client)
    file_path = os.path.join('./python/social_media_api/telegram', 'result.json')
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)
    
    await client.disconnect()  # 연결 종료

if __name__ == "__main__":
    asyncio.run(main())