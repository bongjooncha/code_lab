from telethon import TelegramClient
import asyncio
from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    TELEGRAM_ID = os.getenv('API_ID')
    TELEGRAM_HASH = os.getenv('API_HASH')
    TELEGRAM_PHONE = os.getenv('TELEGRAM_PHONE')
    #발급 받을 혹은 받은 session 파일 경로
    SESSION_PATH = os.path.join('./python/social_media_api/telegram', 'session_' + TELEGRAM_PHONE)
    CLIENT_NAME = TelegramClient(SESSION_PATH, TELEGRAM_ID, TELEGRAM_HASH)

async def main():
    client = Config.CLIENT_NAME
    await client.connect()
    print("connected")
    
    # #auth 확인
    if not await client.is_user_authorized():
        # 로그인 받을 수 있는 session 파일을 받는 과정
        await client.send_code_request(Config.TELEGRAM_PHONE)
        await client.sign_in(Config.TELEGRAM_PHONE, input('Enter the code: '))


if __name__ == "__main__":
    asyncio.run(main())
