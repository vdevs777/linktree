import Image from "next/image";

interface AvatarProps {
  src: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div className="size-28 border-2 border-stroke rounded-full">
      <Image
        src={src}
        width={112}
        height={112}
        alt="Avatar"
        className="rounded-full"
      />
    </div>
  );
}
