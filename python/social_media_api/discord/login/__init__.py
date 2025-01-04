import discord
from discord.ext import commands

class LoginCog(commands.Cog):
    def __init__(self, bot, Channel_id):
        self.bot = bot
        self.channel_id = Channel_id

    @commands.Cog.listener()
    async def on_ready(self):
        print(f'Logged in as {self.bot.user}')
        channel = self.bot.get_channel(self.channel_id)
        if channel:
            await channel.send('봇 가동')
        else:
            print(f"Channel with ID {self.channel_id} not found")
