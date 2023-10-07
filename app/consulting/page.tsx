import { TopBlockConsulting } from "@/components/ConsultingPage/TopBlock/TopBlock";
import { ChooseConsulting } from "@/components/ConsultingPage/choose2/Choose";
import { RequestConsulting } from "@/components/ConsultingPage/request3/Request";
import StaticHeader from "@/components/common/FixedHeader/StaticHeader";




export default function Consulting() {
  return (
    <main className='page'>
        <StaticHeader logoColor={'#474DD8'} />
        <TopBlockConsulting />
        <ChooseConsulting />
        <RequestConsulting />
    </main>
  )
}
