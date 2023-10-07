import React, { FC } from 'react'

type TitleProps = {
    children: React.ReactNode
}

const Title: FC<TitleProps> = ({children}) => {
  return (
    <h2>
        {children}
    </h2>
  )
}

export default Title
