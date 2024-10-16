def mae_loss_derivative(y_true, y_pred):
    n = len(y_true)
    derivative = 0
    
    for i in range(n):
        diff = y_pred[i] - y_true[i]
        sign = 1 if diff > 0 else -1 if diff < 0 else 0
        derivative += sign
    
    derivative /= n
    
    return derivative

# 예시 데이터
y_true = [2, 3, 5, 3]
y_pred = [2.5, 3.2, 4.8, 6.5]

# MAE 손실 함수의 미분 계산
result = mae_loss_derivative(y_true, y_pred)
print("MAE 손실 함수의 미분 결과:", result)
