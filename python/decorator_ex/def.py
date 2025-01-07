# 인자가 없는 데코레이터
def decorator_no_args(func):
    def wrapper():
        print("decorator를 사용중")
        func()
        print("decorator 사용 완료")
    return wrapper

@decorator_no_args
def hello():
    print("hello")

# args인자가 있는 데코레이터
def decorator_with_args(func):
    def wrapper(*args):
        print("decorator를 사용중")
        func(*args)
        print("decorator 사용 완료")
    return wrapper

@decorator_with_args
def use_decorator(*args):
    print(args)

use_decorator("decorator 사용", "decorator 사용 완료")
use_decorator(a = "decorator 사용", b = "decorator 사용 완료") # 오류 발생

# kwargs인자가 있는 데코레이터
def decorator_with_kwargs(func):
    def wrapper(**kwargs):
        print("decorator를 사용중")
        func(**kwargs)
        print("decorator 사용 완료")
    return wrapper

@decorator_with_kwargs
def use_decorator_kwargs(**kwargs):
    print(kwargs)

use_decorator_kwargs(name="decorator", age="20")