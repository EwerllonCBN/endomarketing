import {
  Container,
  Title,
  Text,
  BoxTitle,
} from '../../Form/InformationBox/styles'
export function InformationBox() {
  return (
    <Container>
      <BoxTitle>
        <Title>Endomarketing</Title>
      </BoxTitle>
      <Text>
        Endomarketing está relacionada às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para cliente. Marketing interno, devido ao nome é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes
      </Text>
      <button type="button">
        Dispensar
      </button>
    </Container>
  )
}