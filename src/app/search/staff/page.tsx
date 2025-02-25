import { Loading } from "../_components/loading";
import StaffContent from "./_components/staff-content";
import { Suspense } from "react";

const StaffPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <StaffContent />
    </Suspense>
  );
};

export default StaffPage;
