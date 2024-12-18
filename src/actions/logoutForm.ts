'use server'

import {signOut} from '@/auth'
import {revalidatePath} from 'next/cache'

export const logoutForm = async () => {
  await signOut()
  revalidatePath('/')
}
