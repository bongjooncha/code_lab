//
//  CalculatorDisplay.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/15/25.
//

import SwiftUI

struct CalculatorDisplayView: View {
    var text: String
    var textColor: Color
    
    var body: some View {
        HStack {
            Spacer()
            Text(text)
                .font(.system(size: 64))
                .foregroundColor(textColor)
                .padding()
                .lineLimit(1)
                .minimumScaleFactor(0.5)
        }
    }
} 