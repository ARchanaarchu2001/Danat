import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Worker, Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const Menus = ['/assets/menucard.pdf']

export default function Menupage() {
  const [open, setOpen] = useState(false)
  const [pdfUrl, setPdfUrl] = useState(null)
  const defaultLayoutPluginInstance = defaultLayoutPlugin()

  const onView = (url) => {
    setPdfUrl(url)
    setOpen(true)
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Menus.map((src, idx) => (
          <div key={idx} className="rounded-lg border border-white/10 p-4 bg-white/5">
            <div className="w-full aspect-[3/4] rounded-md bg-white/10 flex items-center justify-center text-white/70 text-sm">
              Menu PDF
            </div>
            <button
              onClick={() => onView(src)}
              className="mt-3 w-full rounded-md bg-white text-black py-2 text-sm font-medium hover:bg-white/90 transition"
            >
              View Menu
            </button>
          </div>
        ))}
      </div>

      {open && pdfUrl && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <div className="relative w-[95vw] max-w-6xl h-[88vh] bg-[#0b0b0b] rounded-lg border border-white/10 overflow-hidden">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 p-1 rounded hover:bg-white/10"
            >
              <X className="text-white" size={24} />
            </button>

            <div className="h-full">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={pdfUrl}
                  plugins={[defaultLayoutPluginInstance]} // adds toolbar, page nav, zoom, print, etc.
                  theme="dark"
                />
              </Worker>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
