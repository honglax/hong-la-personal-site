import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => (
  <div className='container'>{children}</div>
)

export default Container
