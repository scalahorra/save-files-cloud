import React from 'react';
import { AiFillFileText, AiFillFolder } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { fetchFiles } from '@/hooks/fetchFiles';
import useFetchSession from '@/hooks/useSession';
import styles from './ShowFiles.module.scss';

export default function ShowFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  const { fileList } = fetchFiles(parentId, session?.user.email as string);
  const router = useRouter();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }

  return <div className={ styles.fileGrid }>
    { fileList.map((file: { id:'', imageLink:'', imageName:'', isFolder:false, folderName:'' }) => {
      return (

        <div className={ styles.file } key={ file.id }>

        { file.isFolder ? (

          <div
            onClick={ () => router.push(`/file?id=${ file.id }`) }
            className={ `${ styles.noImage } ${ styles.hvrGrow }` }>
            <AiFillFolder size={ 80 } />
            <p>{ file.folderName }</p>
          </div>

        ) : (

          <img onClick={ () => openFile(file.imageLink) }
            className={`${ styles.imgFile } ${ styles.hvrGrow }`}
            src={ file.imageLink }
          />

        ) }

        </div>

      )
    }) }

  </div>
}
