//
//  CalculatorKeypad.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/15/25.
//

import SwiftUI

struct CalculatorKeypad: View {
    // ObservedObject 속성래퍼는 ViewModel에서 변화가 생기면 이를 자동으로 감지
    @ObservedObject var viewModel: CalculatorViewModel
    
    var body: some View {
        VStack(spacing: 12) {
            ForEach(viewModel.buttons, id: \.self) { row in
                HStack(spacing: 12) {
                    ForEach(row, id: \.self) { button in
                        CalculatorButtonView(button: button) { selectedButton in
                            viewModel.performOperation(button: selectedButton)
                        }
                    }
                }
                .padding(.bottom, 3)
            }
        }
    }
} 

// #Preview {
//     CalculatorKeypad(viewModel: <#T##CalculatorViewModel#>)
// }
