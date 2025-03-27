import SwiftUI
import Combine

enum TabItem: Int, CaseIterable {
    case home=0, profile, settings

    var title: String {
        switch self{
            case .home:
                return "Initial"
            case .profile:
                return "Calculator"
            case .settings:
                return "Settings"
        }
    }
}

class NavigationViewModel: ObservableObject {
    @Published var selectedTab: TabItem = .home
    @Published var showingMenu: Bool = false

    func navigateTo(tab: TabItem) {
        selectedTab = tab
        showingMenu = false
    }
}
