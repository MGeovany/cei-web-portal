import React from 'react'
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme
} from '@mantine/core'

import PropTypes from 'prop-types'

export const CasoCard = (props) => {
  const theme = useMantineTheme()

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  // const casosC = props.casosTec

  return (
    <div>
     <div style={{ width: 400, margin: '10px', height: '100%' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={props.caso.img} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{props.caso.titulo}</Text>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {props.caso.descripcion}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Leer Mas
        </Button>
      </Card>
    </div>
    </div>
  )
}

CasoCard.propTypes = {
  img: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  casosTec: PropTypes.array.isRequired,
  caso: PropTypes.object.isRequired
}
