import { TopBlock } from "@/components/MainPage/TopBlock/TopBlock";
import { Approach } from "@/components/MainPage/approach5/Approach";
import { CheckOut } from "@/components/MainPage/checkOut6/CheckOut";
import { Clients } from "@/components/MainPage/clients2/Clients";
import { Expertise } from "@/components/MainPage/expertise4/Expertise";
import { Services } from "@/components/MainPage/services3/Services";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";

export default function Home() {
  return (
    <main className='page'>
      <StaticHeader auditColor={'white'} researchColor={'white'} consultingColor={'white'} evaluationColor={'white'} />
      <TopBlock />
      <Clients />
      <Services />
      <Expertise />
      <Approach />
      <CheckOut />
    </main>
  )
}
