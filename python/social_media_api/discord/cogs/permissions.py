import discord
from discord.ext import commands

class PermissionsCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_ready(self):
        for guild in self.bot.guilds:
            me = guild.me  # 봇의 Member 객체 가져오기
            permissions = me.guild_permissions  # 봇의 권한 가져오기
            print(f"\n서버: {guild.name}")
            print("봇의 권한:")
            for perm, value in permissions:
                print(f"{perm}: {value}")