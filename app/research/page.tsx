import { TopBlockResearch } from "@/components/ResearchPage/TopBlock/TopBlock";
import { ChooseResearch } from "@/components/ResearchPage/choose2/Choose";
import { RequestResearch } from "@/components/ResearchPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";



export default function Research() {
  return (
    <main className='page'>
        <StaticHeader logoColor={'#34C88C'} />
        <TopBlockResearch />
        <ChooseResearch />
        <RequestResearch />
    </main>
  )
}
