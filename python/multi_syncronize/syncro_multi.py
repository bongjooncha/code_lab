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
    tasks = []
    for i in range(10):
        tasks.append(asyncio.create_task(longcal(i)))
        # tasks.append(asyncio.create_task(longbreak(i)))
    await asyncio.gather(*tasks)
    print("걸린시간: ", time.time() - start)

if __name__ == "__main__":
    asyncio.run(main())