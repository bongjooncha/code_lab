import SwiftUI

struct MenuView: View {
    @ObservedObject var viewModel: NavigationViewModel
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        VStack(alignment: .leading, spacing: 20) {
            Text("Menu")
                .font(.title2)
                .padding(.top, 10)
                .padding(.bottom, 3)
            
            ForEach(TabItem.allCases, id: \.self) { tab in
                Button(action: {
                    viewModel.navigateTo(tab: tab)
                    dismiss() 
                }) {
                    HStack {
                        Text(tab.title)
                            .font(.headline)
                        Spacer()
                    }
                    .padding()
                    .background(viewModel.selectedTab == tab ? Color.blue.opacity(0.2) : Color.clear)
                    .cornerRadius(8)
                }
            }
            
            Spacer()
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
    }
}

extension TabItem: Hashable {}

#Preview {
    MenuView(viewModel: NavigationViewModel())
}
