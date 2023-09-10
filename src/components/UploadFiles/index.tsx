import React, { ChangeEvent, useState } from 'react'
import Button from '../common/Button/Button';
import CommonProgress from '../common/Progress/Progress';
import { fileUpload } from '@/Api/FileUpload';
import { addFolder } from '@/Api/Firestore';
import useFetchSession from '@/hooks/useSession';
import styles from "./UploadFiles.module.scss";

export default function UploadFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState('');

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email as string);
  }

  const uploadFolder = () => {
    let payload = {
      folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || '',
      userEmail: session?.user.email
    }

    addFolder(payload);
    setFolderName('');
  }

  return (
    <div className={ styles.uploadMain }>
      <Button
        onClick={ () => {
          setFileVisible(false);
          setFolderVisible(!isFolderVisible);
        } }
        title='Crear carpeta'
        btnClass='btn-success'
      />

      { isFolderVisible ? (
        <>
          <input
          value={ folderName }
            onChange={ (event) => setFolderName(event.target.value) }
            type="text"
            placeholder="Nombre carpeta"
            className="input input-bordered input-md w-full max-w-xs"
          />

          <Button
            onClick={ () => uploadFolder() }
            title='Añadir'
            btnClass='btn-success m-2'
          />
        </>
      ) : ( <></> )}


      <Button
        onClick={ () => {
          setFolderVisible(false);
          setFileVisible(!isFileVisible);
        } }
        title='Añadir archivo'
        btnClass='btn-success m-2'
      />

      { isFileVisible ? (
        <input
          onChange={ (event) => uploadFile(event) }
          type='file'
          className='file-input w-full max-w-xs'
        />
      ) : ( <></> )}

      { progress === 0 || progress === 100 ? <></>
      : <CommonProgress progress={ progress } />
      }
    </div>
  )
}
