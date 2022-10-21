import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('Should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petropolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Murici',
      slug: 'murici',
      location: {
        latitude: 129,
        longitude: -50
      }
    }

    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Murici/i)).toBeInTheDocument()
  })
})
