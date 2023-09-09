import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Button from "@/components/common/Button/Button";

export default function useFetchSession() {

  const { data: session } = useSession();

  return ({ session })
}
