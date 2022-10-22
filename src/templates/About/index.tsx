import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Close" />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi quod
        maiores repudiandae, facere exercitationem autem amet voluptatibus,
        ipsam perferendis fugiat ab vel voluptate nihil quo rem numquam error
        minima harum.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
