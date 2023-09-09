import React from 'react';
import Topbar from '../Topbar';
import UploadFiles from '../UploadFiles';
import styles from './Home.module.scss';

export default function HomeComponent() {

  return (
    <div>
      <Topbar />
      <UploadFiles />
    </div>
  );
}
