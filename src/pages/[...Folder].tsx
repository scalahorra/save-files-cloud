import React from 'react';
import { useRouter } from 'next/router';
import UploadFiles from '@/components/UploadFiles';
import ShowFiles from '@/components/ShowFiles';
import Topbar from '@/components/Topbar';
import useFetchSession from '@/hooks/useSession';

export default function Folder() {
  let { session } = useFetchSession();
  const router = useRouter();
  let parentId = router?.query?.id;

  return (
    <div>
      <Topbar />

      { session ? (
        <>
          <UploadFiles parentId={parentId as string} />

          <ShowFiles parentId={parentId as string} />
        </>
      ) : ( <></> )}
    </div>
  )
}
