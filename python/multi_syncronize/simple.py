import time

def longcal(i):
    ans = 0
    for _ in range(10000):
        for _ in range(10000):
            ans += 1
    print(i)

def longbreak(i):
    time.sleep(2)
    print(i)



if __name__ == "__main__":
    start = time.time()
    for i in range(10):
        longcal(i)
        # longbreak(i)
    print("걸린시간: ",time.time()-start)
