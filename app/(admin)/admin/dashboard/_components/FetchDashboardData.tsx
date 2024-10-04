import { getAllCategory } from "@/services/category"
import { getAllInstance } from "@/services/instance"
import { getAllRelease } from "@/services/release"
import { getAllUsersWithoutAdmin } from "@/services/user"
import GraphDashboard from "./GraphDashboard"

const FetchDashboardData = async () => {
  const instances = await getAllInstance()
  const categorys = await getAllCategory()
  const releases = await getAllRelease()
  const users = await getAllUsersWithoutAdmin()

  const ifDataEmpty = instances?.length == 0 || categorys?.length == 0 || releases?.length == 0 || users?.length == 0


  return (
    <>
      {ifDataEmpty && <div>Data is empty</div>}

      <GraphDashboard
        instances={instances!}
        categorys={categorys!}
        releases={releases!}
        users={users!}
      />
    </>
  )
}

export default FetchDashboardData