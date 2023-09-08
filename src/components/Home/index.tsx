import React from 'react';
import useFetchSession from '@/hooks/useSession';
import Topbar from '../Topbar';
import styles from './Home.module.scss';

export default function HomeComponent() {

  let { session } = useFetchSession();

  return (
    <Topbar/>
  );
}
