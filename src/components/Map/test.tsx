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
})
