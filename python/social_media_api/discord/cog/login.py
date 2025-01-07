import discord
from discord.ext import commands

class Login(commands.Cog):
    def __init__(self, bot,channel):
        self.bot = bot
        self.channel = channel
    
    @commands.Cog.listener()
    async def on_ready(self):
        print(f"{self.bot.name}에 {self.bot.user} 로그인")
    
