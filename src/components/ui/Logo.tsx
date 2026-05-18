import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 280, height = 100 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Логотип"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
