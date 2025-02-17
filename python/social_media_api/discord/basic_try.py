import os
import asyncio
import dotenv
import discord
from basic.send_message import send_message, send_embed_messsage

dotenv.load_dotenv()

if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())


try_channel_id = 1323142921788330056

intents = discord.Intents.default()

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')
    await send_message(client, try_channel_id, "봇 가동")
    await send_embed_messsage(client, try_channel_id, "봇 가동", "봇 가동", 0x00ff00)

client.run(os.getenv("TRY_BOT_TOKEN"))

