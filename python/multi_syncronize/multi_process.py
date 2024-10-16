import multiprocessing
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

def main():
    start = time.time()
    processes = []
    for i in range(50):
        # process = multiprocessing.Process(target=longcal, args=(i,))
        process = multiprocessing.Process(target=longbreak, args=(i,))
        processes.append(process)
        process.start()

    for process in processes:
        process.join()
    print("걸린시간: ", time.time() - start)

if __name__ == "__main__":
    # multiprocessing.freeze_support()
    main()