import React from 'react';
import { AiFillFileText, AiFillFolder } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { fetchFiles } from '@/hooks/fetchFiles';
import styles from './ShowFiles.module.scss';

export default function ShowFiles({ parentId }: FolderStructure) {
  const { fileList } = fetchFiles(parentId);
  const router = useRouter();

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }

  return <div className={ styles.fileGridAux }>
    { fileList.map((file: { id:'', imageLink:'', imageName:'', isFolder:false, folderName:'' }) => {
      return (

        <div className={ styles.fileAux } key={ file.id }>

        { file.isFolder ? (

          <div
            onClick={ () => router.push(`/file?id=${ file.id }`) }
            className={ `${ styles.noImageAux } ${ styles.hvrGrow }` }>
            <AiFillFolder size={ 80 } />
            <p>{ file.folderName }</p>
          </div>

        ) : (

          <img onClick={ () => openFile(file.imageLink) }
            className={`${ styles.imgAux } ${ styles.hvrGrow }`}
            src={ file.imageLink }
          />

        ) }

        </div>

      )
    }) }

  </div>
}
