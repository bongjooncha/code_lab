from discord.ext import commands

class MessageDetectionCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message):
        # 봇 자신이 보낸 메시지는 무시
        if message.author == self.bot.user:
            return
        print(f"메시지 감지: {message.content}")
        await self.bot.process_commands(message)

    @commands.command()
    async def hello(self, ctx, message: str):
        await ctx.send(f'"{message}"가 확인되었습니다.')