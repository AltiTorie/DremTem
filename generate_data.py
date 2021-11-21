import datetime
import random
import numpy as np


def generate():
    now = datetime.datetime.now()
    times = [now.strftime('%Y-%m-%dT%H:%M:%SZ')]
    data = [25]
    for i in range(0, 1000):
        b = now + datetime.timedelta(minutes=1)
        now = b
        print(f"{data[i]-1} - {data[i]+1}")
        d = np.random.normal(data[-1], 1, (1,))[0]
        print(f"D: {d}")
        data.append(d)
        times.append(b.strftime('%Y-%m-%dT%H:%M:%SZ'))
        # print(f"{times[-1]} : {data[-1]}")

    # for t, d in zip(times, data):
        # print(f"{t} : {d}")
    # print('[')

    # for t in times:
    #     print(f"\"{t}\",")
    # print(']')

    print('[')
    for d in data:
        print(f"{d:.2f},")
    print(']')


if __name__ == "__main__":
    generate()
    # print()
