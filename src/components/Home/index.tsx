import React from 'react';
import Topbar from '../Topbar';
import UploadFiles from '../UploadFiles';
import ShowFiles from "../ShowFiles";
import styles from './Home.module.scss';

export default function HomeComponent() {

  return (
    <div>
      <Topbar />

      <UploadFiles />

      <ShowFiles />
    </div>
  );
}
