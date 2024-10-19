import React from 'react'
import { useParams } from 'react-router-dom'

const FormDetailPage = ({ formName }) => {
    return (
      <div>
        <h1>{formName}</h1>
      </div>
    )
  }

export default function FormDetail() {
    const { formName } = useParams()
    return <FormDetailPage formName={decodeURIComponent(formName)} />
}

