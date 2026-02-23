// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ArrayFirst",
    products: [
        .library(name: "ArrayFirst", targets: ["ArrayFirst"]),
    ],
    targets: [
        .target(name: "ArrayFirst", path: "Sources"),
    ]
)
