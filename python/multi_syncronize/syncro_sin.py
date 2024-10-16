import asyncio
import time

async def longcal(i):
    ans = 0
    for _ in range(10000):
        for _ in range(10000):
            ans += 1
    print(i)

async def longbreak(i):
    await asyncio.sleep(2)
    print(i)

async def main():
    start = time.time()
    for i in range(10):
        # await longcal(i)
        await longbreak(i)
    print("걸린시간: ", time.time() - start)

if __name__ == "__main__":
    asyncio.run(main())