//
//  ContentView.swift
//  SwiftUITutorial
//
//  Created by Apple on 3/24/25.
//

import SwiftUI

//struct를 통해서 구조체 형식을 생성. ContextView는 앱의 메인 화면을 표시하는 기본 화면.
//View 프로토콜. SwiftUI의 화면에 표기될 수 있는 요소를 정의.
enum Pages: String, Hashable {
    case initial, calculator, settings
}
struct ContentView: View {
    @StateObject private var navigationViewModel = NavigationViewModel()
    @State var currentPage: Pages = .initial
    //some View에서의 some은 View type을 따르지만 정확한 타입을 지정하기 어렵기에 사용.
    var body: some View {
        NavigationStack {
            TabView(selection: $navigationViewModel.selectedTab) {
                Tab("Init", systemImage: "globe", value: .home) {
                    InitialView()
                }
                Tab("설정", systemImage: "globe", value: .home) {
                    SettingsView()
                }
                Tab("계산기", systemImage: "globe", value: .home) {
                    CalculatorView()
                }
//                InitialView()
//                    .tabItem {
//                        Label("Init", systemImage: "globe")
//                    }
//                    .tag(TabItem.home)
                
//                CalculatorView()
//                    .tabItem {
//                        Label("Calculator", systemImage: "plus.forwardslash.minus")
//                    }
//                    .tag(TabItem.profile)
//                
//                SettingsView()
//                    .tabItem {
//                        Label("Setting", systemImage: "gear")
//                    }
//                    .tag(TabItem.settings)
            }
//            .tabViewStyle(.automatic)
            .navigationTitle(navigationViewModel.selectedTab.title)
            .navigationBarTitleDisplayMode(.inline)
            .tabViewStyle(.tabBarOnly)
//            .navigationBarItems(
//                trailing: Button(action: {
//                    navigationViewModel.showingMenu.toggle()
//                    print("hhdjdlkfgdl")
//                }) {
//                    Image(systemName: "line.horizontal.3")
//                }
//            )
            .sheet(isPresented: $navigationViewModel.showingMenu) {
                MenuView(viewModel: navigationViewModel)
            }
        }
        .environmentObject(navigationViewModel)
    }
}

#Preview {
    ContentView()
}
