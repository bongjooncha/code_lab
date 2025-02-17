import asyncio
import os
import dotenv
import discord
from discord.ext import commands
from cogs import LoginCog, MessageDetectionCog

if os.name == 'nt':
    asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())

dotenv.load_dotenv()

TRY_TOKEN = os.getenv('TRY_BOT_TOKEN')
TRY_CHANNEL_ID = 1323142921788330056

CHECK_TOKEN = os.getenv('CHECK_BOT_TOKEN')
CHECK_CHANNEL_ID = 1327535337152446557

intents = discord.Intents.default()
intents.message_content = True 
bot = commands.Bot(command_prefix='!', intents=intents)

TRY = LoginCog(bot, TRY_CHANNEL_ID, False)

async def try_setup_hook():
    await bot.add_cog(TRY)
    await bot.add_cog(MessageDetectionCog(bot))
bot.setup_hook = try_setup_hook


# CHECK = LoginCog(bot, CHECK_CHANNEL_ID, False)

# async def check_setup_hook():
#     await bot.add_cog(CHECK)
#     await bot.add_cog(MessageDetectionCog(bot))
# bot.setup_hook = check_setup_hook


# 봇 실행
# bot.run(CHECK_TOKEN)
bot.run(TRY_TOKEN)