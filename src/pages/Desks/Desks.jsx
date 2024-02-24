import React from 'react'
import { DeskCollection } from '../../components/DeskCollection'
import {Testimonials} from "../../components/Testimonials"
import { Contact } from '../Contact/Contact'
import { Email } from '../../components/Email'
export const Desks = () => {
  return (
    <div>
      <DeskCollection />
      <Testimonials />
      <Email />
    </div>
  )
}
