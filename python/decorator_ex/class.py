class Decorator:
    def __init__(self, func):
        self.func = func
    
    # 기본 데코레이터(__call__을 사용할시 class를 def처럼 호출할때 사용)
    def __call__(self, *args, **kwargs):
        print("basic decorator를 사용 시작")
        self.func(*args, **kwargs)
        print("basic decorator 사용 완료")
        return "__call__ 리턴값"
    
    # 데코레이터 안에 
    def __str__(self):
        return "__str__ 리턴값"
        
    
    # 데코레이터 1
    @staticmethod
    def call1(func):
        def wrapper(*args, **kwargs):
            print("1.decorator를 사용 시작")
            func(*args, **kwargs)
            print("1.decorator 사용 완료")
        return wrapper

    # 데코레이터 2
    @staticmethod
    def call2(func):
        def wrapper(*args, **kwargs):
            print("2.decorator를 사용 시작")
            func(*args, **kwargs)
            print("2.decorator 사용 완료")
        return wrapper


print("--------------------------------")

@Decorator
def use_basic_decorator(*args, **kwargs):
    print(*args, **kwargs)
    return "use_basic_decorator 리턴값"

use_basic_decorator("basic decorator 사용") # decorator내 __call__값을 출력하지는 않음
print("--------------------------------")
print(use_basic_decorator("basic decorator 사용")) # decorator내 __call__값을 출력함
print("--------------------------------")
print(use_basic_decorator) # decorator내 __str__값만을 출력함
print("--------------------------------")

@Decorator.call1
@Decorator.call2
def use_decorator(*args, **kwargs):
    print(*args, **kwargs)

use_decorator("static method decorator 사용")
print("--------------------------------")

