import React from 'react'
import { Card, Image, Group, useMantineTheme } from '@mantine/core'

import PropTypes from 'prop-types'

export const CasoCard = (props) => {
  const theme = useMantineTheme()

  return (
    <div>
      <div style={{ width: 400, margin: '10px 0 10px', height: '100%' }}>
        <Card shadow="sm" p="lg">
          <Card.Section>
            <Image src={props.caso.img} height={160} alt="Norway" />
          </Card.Section>

          <Group
            position="apart"
            style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
          >
            <div className="casos__card__content__title">
              {props.caso.titulo}
            </div>
          </Group>

          <div className="casos__card__content__desc">
            {props.caso.descripcion}
          </div>

          <hr />
          <div className="casos__card__content__button">Leer Mas</div>
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
