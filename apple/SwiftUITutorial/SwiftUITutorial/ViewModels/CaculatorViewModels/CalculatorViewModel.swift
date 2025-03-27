//
//  CalculatorViewModel.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/15/25.
//

import SwiftUI

//  ObservableObject 프로토콜은 뷰 모델의 상태를 관찰 가능하게 만들어줌.
//  @Published 속성 래퍼는 뷰 모델의 상태를 관찰 가능하게 만들어줌.
class CalculatorViewModel: ObservableObject {
    @Published var displayValue = "0"
    @Published var isDarkMode = true
    
    // CalculatorLogic()은 아래에 정의 되어 있음
    private var calculatorLogic = CalculatorLogic()
    
    // CalculatorButton을 2차원 배열로 정의
    let buttons: [[CalculatorButton]] = [
        [.clear, .negative, .percent, .divide],
        [.seven, .eight, .nine, .multiply],
        [.four, .five, .six, .subtract],
        [.one, .two, .three, .add],
        [.darkMode, .zero, .decimal, .equals]
    ]
    
    // CalculatorButton을 클릭시 실행되는 함수
    func performOperation(button: CalculatorButton) {
        // 버튼이 darkMode일 경우 다크모드 토글
        if button == .darkMode {
            toggleDarkMode()
        } else {
            // 이외는 계산기 로직 실행
            displayValue = calculatorLogic.performOperation(button: button, currentValue: displayValue)
        }
    }
    
    // isDarkMode 토클. 함수 내부에서만 실행 시키기 때문에 private 처리
    private func toggleDarkMode() {
        isDarkMode.toggle()
    }
}

struct CalculatorLogic {
    private var previousValue: Double?
    private var currentOperation: Operation?
    private var newValue = true
    
    mutating func performOperation(button: CalculatorButton, currentValue: String) -> String {
        var displayValue = currentValue
        
        switch button {
        case .add, .subtract, .multiply, .divide:
            if let value = Double(displayValue) {
                previousValue = value
                currentOperation = button.operation
                newValue = true
            }
            return displayValue
            
        case .equals:
            if let operation = currentOperation,
               let previousValue = previousValue,
               let displayValue = Double(displayValue) {
                let result: Double
                
                switch operation {
                case .add: result = previousValue + displayValue
                case .subtract: result = previousValue - displayValue
                case .multiply: result = previousValue * displayValue
                case .divide: result = previousValue / displayValue
                }
                
                let resultString = formatResult(result)
                self.newValue = true
                return resultString
            }
            return displayValue
            
        case .clear:
            previousValue = nil
            currentOperation = nil
            newValue = true
            return "0"
            
        case .decimal:
            if !displayValue.contains(".") {
                return displayValue + "."
            }
            return displayValue
            
        case .negative:
            if let value = Double(displayValue) {
                return formatResult(-value)
            }
            return displayValue
            
        case .percent:
            if let value = Double(displayValue) {
                return formatResult(value / 100)
            }
            return displayValue
            
        case .number(let value):
            let number = String(value)
            
            if newValue {
                newValue = false
                return number
            } else {
                if displayValue == "0" {
                    return number
                } else {
                    return displayValue + number
                }
            }
            
        default:
            return displayValue
        }
    }
    
    private func formatResult(_ result: Double) -> String {
        if result.truncatingRemainder(dividingBy: 1) == 0 {
            return String(format: "%.0f", result)
        } else {
            return String(format: "%.8f", result).replacingOccurrences(of: #"0+$"#, with: "", options: .regularExpression)
                .replacingOccurrences(of: #"\.$"#, with: "", options: .regularExpression)
        }
    }
} 
