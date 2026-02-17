import AnnouncementBar from "@/components/sections/announcement-bar";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function CollectionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
