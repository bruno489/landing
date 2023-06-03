import React from 'react'
import { HowIAm } from './howIAm'
import { MyStacks } from './myStacks'
import { Experiences } from './experiences'
import { Contact } from './contact'

export const ConteudoDesk = (): JSX.Element => {
  return (
    <>
      <HowIAm />
      <MyStacks />
      <Experiences />
      <Contact />
    </>
  )
}
