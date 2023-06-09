import Image from 'next/image'
import Link from 'next/link'

export const Logo = ({
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  return (
    <Link href="/" {...props}>
      <Image
        src="/images/logo.png"
        width={30}
        height={30}
        alt="Heroic Games Launcher Logo"
      />
      <span className="text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
        Heroic Games Launcher
      </span>
    </Link>
  )
}
