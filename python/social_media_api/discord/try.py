import os
import dotenv
import discord
from discord.ext import commands

dotenv.load_dotenv()

# 봇의 프리픽스 설정 (명령어 시작 문자)
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

# 봇이 준비되었을 때 호출되는 이벤트
@bot.event
async def on_ready():
    print(f'Logged in as {bot.user}')

# 간단한 명령어 예제
@bot.command()
async def hello(ctx):
    await ctx.send('안녕하세요!')

# 봇 토큰으로 로그인
bot.run(os.getenv('TRY_BOT_TOKEN'))
