from discord.ext import commands
from datetime import datetime
import asyncio

class LoginCog(commands.Cog):
    def __init__(self, bot, channel_id):
        self.bot = bot
        self.channel = self.bot.get_channel(channel_id)
    
    @commands.Cog.listener()
    async def on_ready(self):
        current_time = datetime.now().strftime("%d %H:%M:%S")
        if self.channel:
            await self.channel.send(f"{self.bot.user}가 {current_time}에 로그인했습니다.")
            print(f"{current_time}:{self.bot.gulid.name}에 {self.bot.user} 로그인")
        else:
            print(f"Channel with ID {self.channel_id} not found")
    
    def cog_unload(self):
        current_time = datetime.now().strftime("%d %H:%M:%S")
        message = f"{self.bot.user}가 {current_time}에 로그아웃했습니다."
        asyncio.create_task(self.channel.send(message))
