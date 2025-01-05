import os
import dotenv
import discord
from discord.ext import commands
from login import LoginCog
from functions.check_permission import CheckPermissionCog


dotenv.load_dotenv()
try_channel_id = 1323142921788330056
Token = os.getenv('TRY_BOT_TOKEN')

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix='!', intents=intents)

bot.add_cog(LoginCog(bot, 1323142921788330056))
bot.add_cog(CheckPermissionCog(bot, 1323142921788330056))

bot.run(Token)

