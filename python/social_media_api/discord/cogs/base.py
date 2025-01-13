from discord.ext import commands

class BaseCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    def common_method(self):
        # 공통 메서드 구현
        pass