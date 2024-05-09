import { useForm } from 'react-hook-form'
import Styled from './styles'
import { createUserWithEmail } from '../../FireBase/createUserWithEmail'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserForm () {
  const [fireBase, setFireBase] = useState(null)
  const navigate = useNavigate()
  const {
    register, // el register tiene informacion de cada campo
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    const { email, password } = data
    const statusCreateUser = await createUserWithEmail(email, password)
    setFireBase(statusCreateUser)
    if (statusCreateUser.status) {
      setTimeout(() => {
        reset()
        setFireBase(null)
        navigate('/')
      }, 1500)
    }
  }

  const required = 'campo requerido'

  return (
    <Styled.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Styled.StyledLabel
        htmlFor='name'
      >Nombre
      </Styled.StyledLabel>
      <Styled.StyledInput
        id='name'
        {...register('name', { required: true, maxLength: 30 })}
      />
      {errors.name && errors.name.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.name && errors.name.type === 'maxLength' && (
        <Styled.StyledAlert role='alert'>Hasta 30 caracteres</Styled.StyledAlert>
      )}

      <Styled.StyledLabel htmlFor='lastName'>Apellido</Styled.StyledLabel>
      <Styled.StyledInput
        id='lastname'
        {...register('lastName', { required: true, maxLength: 20 })}
      />
      {errors.lastName && errors.lastName.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.lastName && errors.lastName.type === 'maxLength' && (
        <Styled.StyledAlert role='alert'>Hasta 20 caracteres</Styled.StyledAlert>
      )}

      <Styled.StyledLabel htmlFor='email'>Email</Styled.StyledLabel>
      <Styled.StyledInput
        id='email' {...register('email',
          {
            required: 'el correo electronico es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ingresa una dirección de correo válida'
            }
          })}
      />
      {errors.email && errors.email.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.email && errors.email.message && (
        <Styled.StyledAlert role='alert'>{errors.email.message}</Styled.StyledAlert>
      )}
      <Styled.StyledLabel htmlFor='password'>Contraseña</Styled.StyledLabel>
      <Styled.StyledInput
        id='password' {...register('password', {
          required: true,
          minLength: 6,
          maxLength: 10,
          message: 'la contraseña debe tener entre 6 y 8 caracteres'
        })}
      />
      {errors.password && errors.password.type === 'required' && (
        <Styled.StyledAlert role='alert'>{required}</Styled.StyledAlert>
      )}
      {errors.password && errors.password.type === 'minLength' && (
        <Styled.StyledAlert role='alert'>mínimo 6 caracteres</Styled.StyledAlert>
      )}

      <div>
        <Styled.StyledButton type='submit'> CREAR</Styled.StyledButton>
      </div>
      {fireBase && <p>{fireBase?.status}{fireBase?.message}</p>}
    </Styled.StyledForm>
  )
}
