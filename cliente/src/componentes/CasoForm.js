import React from 'react'
import {
  NativeSelect,
  InputWrapper,
  Input,
  Textarea,
  TextInput
} from '@mantine/core'

import { useForm } from '@mantine/form'

export const CasoForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  })

  return (
    <form
      className="form__caso"
      onSubmit={form.onSubmit((values) => console.log(values))}
    >
      <div className="form__proyecto">
        <div className="form__main">
          <div className="form__main__section s1">
            <NativeSelect
              data={['Tecnologia', 'Comercial', 'Social', 'Salud']}
              placeholder="Select"
              label="Seccion de Caso"
              required
            />
          </div>
          <div className="form__main__section asset__m10 s1">
            <InputWrapper
              id="input-nombre-proyecto"
              required
              label="Nombre del Proyecto"
            >
              <Input id="input-nombre-proyecto" placeholder="Mi Proyecto" />
            </InputWrapper>
          </div>

          <div className="form__main__section s2">
            <InputWrapper id="input-demo" required label="Breve Descripcion">
              <Input
                id="input-demo"
                placeholder="Este es mi proyecto sobre tecnologia"
              />
            </InputWrapper>
          </div>
          <div className="form__main__section s2">
            <input className="file-btn" type="file" name="archivosubido" />
          </div>

          <div className="form__main__section s3">
            <Textarea
              minRows={10}
              maxRows={15}
              placeholder="Mas Detalles"
              label="Detalles"
              required
            />
          </div>
        </div>

        <div className="form__integrantes asset__modal__title">
          Integrantes:
          <div className="hr">
            <hr id="hr__green" />
          </div>
          <div className="form__int">
            <div className="form__int__section s1">
              <InputWrapper id="input-int-1" required label="Nombre">
                <Input id="input-nombre-proyecto" placeholder="Mi Proyecto" />
              </InputWrapper>
            </div>
            <div className="form__int__section s2">
              <TextInput
                required
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />
            </div>
            <div className="form__main__section s2">
              <input className="file-btn" type="file" name="archivosubido" />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
