import SwiftUI

struct SettingsView: View {
    @EnvironmentObject var navigationViewModel: NavigationViewModel
    
    var body: some View {
        VStack {
            Text("설정 화면")
                .font(.largeTitle)
            
            Button("홈으로 이동") {
                navigationViewModel.navigateTo(tab: .home)
            }
            .padding()
            .background(Color.orange)
            .foregroundColor(.white)
            .cornerRadius(10)
        }
    }
}

#Preview {
    SettingsView()
        .environmentObject(NavigationViewModel())
}