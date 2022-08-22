import { useRouter } from 'next/router';
import * as Styled from './styles';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function Home() {
  const router = useRouter();

  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Formik
          initialValues={{ name: '', room: '' }}
          validationSchema={Yup.object({
            name: Yup.string().required('Escolha um nome!'),
            room: Yup.string().required('Selecione uma sala!'),
          })}
          onSubmit={(values) => {
            console.log(values);
            router.push({
              pathname: '/room/[room]',
              query: { name: values.name, room: values.room },
            })
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Styled.FormTitle>Bem-vindo ao WebChat!</Styled.FormTitle>
              <Styled.FieldContainer>
                <Styled.Label htmlFor="name">Nome</Styled.Label>
                <Styled.Input name="name" id="name" value={props.values.name} onChange={props.handleChange} />
                {props.errors.name && props.errors.name ? (
                  <Styled.ErrorMessage>{props.errors.name}</Styled.ErrorMessage>
                ) : null}
              </Styled.FieldContainer>
              <Styled.FieldContainer>
                <Styled.Label htmlFor="room">Sala</Styled.Label>
                <Styled.Select name="room" id="room" value={props.values.room} onChange={props.handleChange}>
                  <option value="">----</option>
                  <option value="Futebol">Futebol</option>
                  <option value="Séries">Séries</option>
                  <option value="Filmes">Filmes</option>
                  <option value="Animes">Animes</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Música">Música</option>
                </Styled.Select>
                {props.touched.room && props.errors.room ? (
                  <Styled.ErrorMessage>{props.errors.room}</Styled.ErrorMessage>
                ) : null}
              </Styled.FieldContainer>
              <Styled.Button type="submit" >Entrar na sala</Styled.Button>
            </form>
          )}
        </Formik>
      </Styled.FormContainer>
    </Styled.Container>
  )
}