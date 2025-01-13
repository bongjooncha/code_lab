from discord.ext import commands
from datetime import datetime

class LoginCog(commands.Cog):
    def __init__(self, bot, channel_id, per):
        self.bot = bot
        self.channel_id = channel_id
        self.per = per

    @commands.Cog.listener()
    async def on_ready(self):
        channel = self.bot.get_channel(self.channel_id)
        if channel:
            await self.get_info(channel)
        else:
            print(f"Channel with ID not found")


    async def get_info(self, channel):
        current_time = datetime.now().strftime("%m.%d %H:%M:%S")
        for guild in self.bot.guilds:
            permissions = guild.me.guild_permissions
            print(f"{current_time}:{guild.name}에 {self.bot.user} 로그인")
            await channel.send(f"{self.bot.user}가 {current_time}에 로그인했습니다.")
            if self.per:
                print("봇의 권한:")
                for perm, value in permissions:
                    print(f"{perm}: {value}")