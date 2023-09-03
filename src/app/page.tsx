import HomeBanner from "@/components/HomeBanner";
import Profile from "@/components/common/Profile";

const tempImgUrl = "/excitedPenguin.jpeg";
const tempName = "Anah Benesova";
const tempDate = "December 9, 2022";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <section>
        <Profile src={tempImgUrl} name={tempName} date={tempDate} />
      </section>
    </main>
  );
}
