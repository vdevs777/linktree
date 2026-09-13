import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-(image:--page-background) bg-cover bg-no-repeat px-4 py-8 sm:px-6">
      <div className="flex w-full max-w-147 flex-col items-center space-y-8">
        <div className="flex flex-col items-center space-y-2">
          <div className="size-28 animate-pulse rounded-full bg-surface" />

          <div className="h-4 w-24 animate-pulse rounded bg-surface" />
        </div>

        <ThemeSwitcher />

        <div className="w-full space-y-4">
          <div className="h-14 w-full animate-pulse rounded-lg border border-stroke bg-surface" />
          <div className="h-14 w-full animate-pulse rounded-lg border border-stroke bg-surface" />
          <div className="h-14 w-full animate-pulse rounded-lg border border-stroke bg-surface" />
        </div>

        <div className="flex space-x-4">
          <div className="size-14 animate-pulse rounded-full bg-surface" />
          <div className="size-14 animate-pulse rounded-full bg-surface" />
          <div className="size-14 animate-pulse rounded-full bg-surface" />
        </div>

        <div className="h-4 w-40 animate-pulse rounded bg-surface" />
      </div>
    </div>
  );
}
