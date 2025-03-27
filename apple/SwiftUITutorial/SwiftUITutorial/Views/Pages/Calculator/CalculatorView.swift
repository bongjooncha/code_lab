import SwiftUI

// View는 프로토콜. View 프로토콜은 화면에 표시되는 컨텐츠를 정의.
struct CalculatorView: View {
    // @StateObject를 통해서 뷰의 생명 주기동안 지속되는 관찰가능한 객체 생성
    // 추가로 private을 통해 viewModel은 현재 뷰에서만 사용되고 지속되서 유지 되는 객체가 됨.
    @StateObject private var viewModel = CalculatorViewModel()
    
    var body: some View {
        // ZStack은 선언 순서대로 뷰를 쌓임.
        ZStack {
            // viewModel.isDarkMode에 따라서 배경색 변경
            // .ignoresSafeArea()는 안전 영역(노치, 홈, 인디케이터)등을 무시하고 화면 전체를 채우도록함.
            viewModel.isDarkMode ? Color.black.ignoresSafeArea() : Color.white.ignoresSafeArea()
            
            // Vertical Stack으로 세로로 뷰를 배치
            VStack {
                Spacer()
                // 계산기 디스플레이
                // text는 viewModel의 displayValue를 받아옴. 추가로 색상은 viewModel의 isDarkMode에 따라서 변경
                CalculatorDisplayView(
                    text: viewModel.displayValue,
                    textColor: viewModel.isDarkMode ? .white : .black
                )
                
                // 계산기 키패드
                // viewModel을 통해서 키패드 뷰를 생성
                CalculatorKeypad(viewModel: viewModel)
            }
            .padding()
        }
    }
}

//#Preview {
//    CalculatorButtonView()
//} 
