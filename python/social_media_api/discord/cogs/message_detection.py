from discord.ext import commands
import asyncio

class MessageDetectionCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.Cog.listener()
    async def on_message(self, message):
        # 봇 자신이 보낸 메시지는 무시
        if message.author == self.bot.user or message.content.startswith("!hello"):
            return
        print(f"\n메시지 감지: {message.content}")
        await self.bot.process_commands(message)

    @commands.command()
    async def hello(self, ctx, message: str = None):
        if message:
            await ctx.send(f'"!hello {message}"가 확인되었습니다.')
        else:
            await ctx.send("!hello 명령어 이후 작성된 말이 없습니다.")

    @commands.command()
    async def alert(self, ctx):
        def check(m):
            return m.content.lower() in ["확인", "ok"]
        while True:
            await ctx.send("!!!알람!!!")
            try:
                masg = await self.bot.wait_for('message', timeout = 1, check = check)
                break
            except asyncio.TimeoutError:
                continue