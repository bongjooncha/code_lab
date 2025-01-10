from discord.ext import commands

class SendMessageCog(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.target_channel_id = 123456789012345678  # 실제 채널 ID로 변경

    @commands.command()
    async def send(self, ctx, *, message: str):
        channel = self.bot.get_channel(self.target_channel_id)
        if channel:
            await channel.send(message)
            await ctx.send('메시지를 보냈습니다.')
        else:
            await ctx.send('채널을 찾을 수 없습니다.')