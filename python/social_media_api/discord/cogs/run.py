import os
import dotenv
import discord
from discord.ext import commands
from login import LoginCog
from message_detection import MessageDetectionCog

dotenv.load_dotenv()

TOKEN = os.getenv('TRY_BOT_TOKEN')
CHANNEL_ID = 1323142921788330056

intents = discord.Intents.default()
intents.message_content = True 
bot = commands.Bot(command_prefix='!', intents=intents)

async def setup_hook():
    await bot.add_cog(LoginCog(bot, CHANNEL_ID, False))
    await bot.add_cog(MessageDetectionCog(bot))

bot.setup_hook = setup_hook

# 봇 실행
bot.run(TOKEN)