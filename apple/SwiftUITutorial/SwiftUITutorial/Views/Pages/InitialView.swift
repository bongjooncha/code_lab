import SwiftUI

struct InitialView: View {
    @EnvironmentObject var navigationViewModel: NavigationViewModel
    
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundColor(.accentColor)
            Text("Hello, world!")
        }
        .padding()
    }
}

#Preview {
    InitialView()
        .environmentObject(NavigationViewModel())
}
