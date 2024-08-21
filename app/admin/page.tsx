import ChartsContainer from "@/components/admin/ChartsContainer";
import {
  ChartsLoadingContainer,
  StatsLoadingContainer,
} from "@/components/admin/Loading";
import StatsContainer from "@/components/admin/StatsContainer";
import { Suspense } from "react";

const AdminPage = () => {
  return (
    <>
      <Suspense fallback={<StatsLoadingContainer />}>
        <StatsContainer />
      </Suspense>
      <Suspense fallback={<ChartsLoadingContainer />}>
        <ChartsContainer />
      </Suspense>
    </>
  );
};

export default AdminPage;
