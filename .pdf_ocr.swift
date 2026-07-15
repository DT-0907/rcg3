import Foundation
import PDFKit
import Vision
import AppKit

guard CommandLine.arguments.count > 1,
      let document = PDFDocument(url: URL(fileURLWithPath: CommandLine.arguments[1])) else {
  fatalError("usage: swift .pdf_ocr.swift <pdf> [start] [end]")
}

let start = CommandLine.arguments.count > 2 ? Int(CommandLine.arguments[2]) ?? 0 : 0
let end = min(CommandLine.arguments.count > 3 ? Int(CommandLine.arguments[3]) ?? document.pageCount : document.pageCount, document.pageCount)
print("PAGES: \(document.pageCount)")

for index in start..<end {
  guard let page = document.page(at: index) else { continue }
  let image = page.thumbnail(of: NSSize(width: 1800, height: 1200), for: .mediaBox)
  guard let data = image.tiffRepresentation,
        let bitmap = NSBitmapImageRep(data: data),
        let cgImage = bitmap.cgImage else { continue }
  let request = VNRecognizeTextRequest()
  request.recognitionLevel = .accurate
  request.usesLanguageCorrection = true
  try? VNImageRequestHandler(cgImage: cgImage).perform([request])
  print("\n--- PAGE \(index + 1) ---")
  for observation in request.results ?? [] {
    if let candidate = observation.topCandidates(1).first { print(candidate.string) }
  }
}
