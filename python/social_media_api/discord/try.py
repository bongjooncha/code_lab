import os
import asyncio
import dotenv
import discord
from discord.ext import commands

dotenv.load_dotenv()

if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())


try_channel_id = 1323142921788330056

# 봇의 프리픽스 설정 (명령어 시작 문자)
intents = discord.Intents.default()
intents.message_content = True  # Message Content Intent 활성화
bot = commands.Bot(command_prefix='!', intents=intents)

# 봇이 준비되었을 때 호출되는 이벤트
@bot.event
async def on_ready(tf=False):
    print(f'Logged in as {bot.user}')
    channel = bot.get_channel(try_channel_id)
    if channel:
        await channel.send('안녕하세요!')
    else:
        print(f"Channel with ID {try_channel_id} not found")

    if tf:
        # 봇의 권한 확인
        # for guild in bot.guilds:
        #     me = guild.me  # 봇의 Member 객체 가져오기
        #     permissions = me.guild_permissions  # 봇의 권한 가져오기
        #     print(f"\n서버: {guild.name}")
        #     print("봇의 권한:")
        #     for perm, value in permissions:
        #         print(f"{perm}: {value}")

# 간단한 명령어 예제
@bot.command()
async def hello(ctx):
    await ctx.send('명령어 예제')
    channel = bot.get_channel(try_channel_id)
    await channel.send("할로")

# 특정 채널에 메시지를 보내는 명령어
@bot.command()
async def send(ctx, *, message: str):
    channel = bot.get_channel(try_channel_id)
    print("실행됨")
    if channel:
        await channel.send(message)
        await ctx.send('메시지를 보냈습니다.')
    else:
        await ctx.send('채널을 찾을 수 없습니다.')

# 메시지 감지 이벤트
@bot.event
async def on_message(message):
    # 봇 자신이 보낸 메시지는 무시
    if message.author == bot.user:
        return

    print(f"{message.author}: {message.content}")  # 메시지 내용 출력

    # 명령어 처리를 위해 반드시 아래 라인을 호출해야 함
    await bot.process_commands(message)

"!send prefix사용"


# 봇 토큰으로 로그인
token = os.getenv('TRY_BOT_TOKEN')
bot.run(token)

"!send prefix사용"