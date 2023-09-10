import React from 'react';
import Topbar from '../Topbar';
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from "@/components/ShowFiles";
import useFetchSession from "@/hooks/useSession";

export default function HomeComponent() {
  let { session } = useFetchSession();

  return (
    <div>
      <Topbar />

      { session ? (
        <>
          <UploadFiles parentId="" />

          <ShowFiles parentId="" />
        </>
      ) : ( <></> )}
    </div>
  );
}
