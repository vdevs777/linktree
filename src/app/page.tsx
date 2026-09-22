import type { Metadata } from "next";

import { Avatar } from "@/components/avatar";
import { LinkButton } from "@/components/link-button";
import { SocialLinkButton } from "@/components/social-link-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Typography } from "@/components/typography";

import { createClient } from "@/lib/prismicio";

import { SocialMedia } from "@/types/social-media";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const profile = await client.getSingle("profile");

  const name = profile.data.name ?? "vdevs777";
  const avatar = profile.data.avatar?.url;

  return {
    title: name,
    description: `Links e redes sociais de ${name}.`,
    authors: [{ name }],
    creator: name,

    openGraph: {
      title: name,
      description: `Links e redes sociais de ${name}.`,
      type: "website",
      locale: "pt_BR",
      siteName: name,
      ...(avatar && {
        images: [
          {
            url: avatar,
            width: 800,
            height: 800,
            alt: name,
          },
        ],
      }),
    },

    twitter: {
      card: "summary",
      title: name,
      description: `Links e redes sociais de ${name}.`,
      ...(avatar && {
        images: [avatar],
      }),
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Home() {
  const client = createClient();
  const profile = await client.getSingle("profile");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-(image:--page-background) bg-cover bg-no-repeat px-4 py-8 sm:px-6">
      <div className="flex w-full max-w-147 flex-col items-center space-y-8">
        <div className="space-y-2 text-center">
          {profile.data.avatar?.url && <Avatar src={profile.data.avatar.url} />}
          {profile.data.name && (
            <p className="text-base">@{profile.data.name}</p>
          )}
        </div>

        <ThemeSwitcher />

        <div className="w-full space-y-4">
          {profile.data.links.map((link) => (
            <LinkButton
              href={link.url.text!}
              key={`${link.title}-${link.url.text}`}
            >
              {link.title}
            </LinkButton>
          ))}
        </div>

        <div className="flex space-x-4">
          {profile.data.social_links.map((socialLink) => (
            <SocialLinkButton
              href={socialLink.url.text!}
              socialMedia={socialLink.social as SocialMedia}
              key={`${socialLink.social}-${socialLink.url.text}`}
            />
          ))}
        </div>

        <Typography>
          Feito com ♥ por <i>vdevs777</i>
        </Typography>
      </div>
    </div>
  );
}
