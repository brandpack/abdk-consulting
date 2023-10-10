import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";




export default function Consulting() {
  return (
    <main className='page'>
        <StaticHeader  auditColor={'white'} researchColor={'white'} consultingColor={'#474DD8'} evaluationColor={'white'}/>
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
    </main>
  )
}
