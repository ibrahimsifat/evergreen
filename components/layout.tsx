import { LayoutProps } from "@/.next/types/app/layout";
import PremiumFooter from "@/components/premium/footer";
import PremiumHeader from "@/components/premium/header";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <PremiumHeader />
      <main className="flex-1">{children}</main>
      <PremiumFooter />
    </div>
  )
}
