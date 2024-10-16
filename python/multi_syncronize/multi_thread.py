import threading
import time

print_lock = threading.Lock()

def longcal(i):
    ans = 0
    for _ in range(10000):
        for _ in range(10000):
            ans += 1
    with print_lock:
        print(i)

def longbreak(i):
    time.sleep(2)
    with print_lock:
        print(i)

def main():
    start = time.time()
    threads = []
    for i in range(100):
        # thread = threading.Thread(target=longcal, args=(i,))
        thread = threading.Thread(target=longbreak, args=(i,))
        threads.append(thread)
        thread.start()

    for thread in threads:
        thread.join()
    print("걸린시간: ", time.time() - start)

if __name__ == "__main__":
    main()