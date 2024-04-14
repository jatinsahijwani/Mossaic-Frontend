import {Input} from '@/components/ui/input' 
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Link from "next/link"
import { Button } from "@/components/ui/button"
export default function Page()
{
    return (
        <div className="flex flex-col h-screen w-full bg-gradient-to-br from-gray-900 to-gray-500">
    <header className="relative z-10">
        <div className="container flex items-center justify-between py-4 px-4 md:py-6 md:px-6">
          <Link className="flex items-center space-x-2 font-medium" href="/">
            <AutoAwesomeMosaicIcon className="h-6 w-6" />
            <span className="text-lg font-semibold text-white">Mosaic</span>
          </Link>
          <nav className="hidden space-x-4 md:flex">
            <Link
              className="flex items-center text-sm font-medium text-gray-400 transition-colors  dark:text-gray-50 hover:text-white/80 dark:hover:text-gray-50/80"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-white transition-colors  dark:text-gray-50 hover:text-white/80 dark:hover:text-gray-50/80"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="flex items-center text-sm font-medium text-white transition-colors  dark:text-gray-400 "
              href="/more"
            >
              More
            </Link>
          </nav>
          <Link className="flex items-center space-x-4" href={'/'}>
            <Button size="sm" variant="outline" className="text-white">
              <UploadIcon className="h-4 w-4 mr-2 text-white" />
              Upload
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-col items-center py-12 md:py-24">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-3 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">For More Details Contact Us.</h1>
            <p className="mx-auto capitalize max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              For more feature ideas, or any project related information or issues, feel free to leave your mail.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Input placeholder="Enter your email" required type="email" />
            <Button className="w-full justify-center">Notify me</Button>
          </div>
        </div>
      </main>
    </div>
    )
}

function UploadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
  }