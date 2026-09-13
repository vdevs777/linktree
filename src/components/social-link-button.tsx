import { SocialMedia } from "@/types/social-media";
import Link from "next/link";
import { ComponentProps } from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const socialIcons: Record<SocialMedia, React.ElementType> = {
  twitter: FaTwitter,
  twitch: FaTwitch,
  github: FaGithub,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  whatsapp: FaWhatsapp,
  tiktok: FaTiktok,
};

interface SocialLinkButtonProps extends ComponentProps<typeof Link> {
  socialMedia: SocialMedia;
}

export function SocialLinkButton({
  href,
  socialMedia,
  ...rest
}: SocialLinkButtonProps) {
  const Icon = socialIcons[socialMedia];

  return (
    <Link
      href={href}
      {...rest}
      className="size-14 flex items-center justify-center rounded-full bg-transparent text-text transition-colors hover:bg-highlight"
    >
      <Icon size={24} />
    </Link>
  );
}
