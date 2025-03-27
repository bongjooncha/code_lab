//
//  CalculatorModel.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/15/25.
//

import Foundation
import SwiftUI

enum CalculatorButton: Hashable {
    case number(Int)
    case add, subtract, multiply, divide
    case equals, decimal, percent, negative, clear
    case darkMode
    
    var title: String {
        switch self {
        case .number(let value):
            return String(value)
        case .add:
            return "+"
        case .subtract:
            return "-"
        case .multiply:
            return "×"
        case .divide:
            return "÷"
        case .equals:
            return "="
        case .decimal:
            return "."
        case .percent:
            return "%"
        case .negative:
            return "±"
        case .clear:
            return "AC"
        case .darkMode:
            return ""
        }
    }
    
    var backgroundColor: Color {
        switch self {
        case .add, .subtract, .multiply, .divide, .equals:
            return .orange
        case .clear, .negative, .percent:
            return Color.gray
        case .darkMode:
            return Color.blue
        default:
            return Color(red: 55/255.0, green: 55/255.0, blue: 55/255.0)
        }
    }
    
    var operation: Operation? {
        switch self {
        case .add: return .add
        case .subtract: return .subtract
        case .multiply: return .multiply
        case .divide: return .divide
        default: return nil
        }
    }
    
    // 숫자 버튼 생성을 위한 정적 속성들
    static let zero = number(0)
    static let one = number(1)
    static let two = number(2)
    static let three = number(3)
    static let four = number(4)
    static let five = number(5)
    static let six = number(6)
    static let seven = number(7)
    static let eight = number(8)
    static let nine = number(9)
}

enum Operation {
    case add, subtract, multiply, divide
} 