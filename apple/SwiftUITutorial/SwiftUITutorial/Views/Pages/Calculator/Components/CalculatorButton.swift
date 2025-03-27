//
//  CalculatorButton.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/15/25.
//

import SwiftUI

struct CalculatorButtonView: View {
    var button: CalculatorButton
    var action: (CalculatorButton) -> Void
    
    var body: some View {
        Button(action: {
            action(button)
        }) {
            if case .darkMode = button {
                Image(systemName: "moon.fill")
                    .font(.system(size: 32))
                    .frame(width: buttonWidth(), height: buttonHeight())
                    .background(button.backgroundColor)
                    .foregroundColor(.white)
                    .clipShape(Circle())
            } else {
                Text(button.title)
                    .font(.system(size: 32))
                    .frame(width: buttonWidth(), height: buttonHeight())
                    .background(button.backgroundColor)
                    .foregroundColor(.white)
                    .clipShape(Circle())
            }
        }
    }
    
    private func buttonWidth() -> CGFloat {
        return (UIScreen.main.bounds.width - 5 * 12) / 4
    }
    
    private func buttonHeight() -> CGFloat {
        return (UIScreen.main.bounds.width - 5 * 12) / 4
    }
} 