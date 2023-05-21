'use client'

import { useEffect, PropsWithChildren } from 'react'

type LogProps = PropsWithChildren<{}>

export function Log({ children }: LogProps) {
  useEffect(() => {
    console.log('%cALERTA DE SEGURAN\xc7A', 'color: red; font-size: xx-large;')
    console.log(
      '%cSe algu\xe9m te disser para copiar e colar algo aqui, certeza que \xe9 golpe!',
      'color: white; font-size: x-large;',
    )
    console.log(
      '%cColar qualquer coisa aqui pode dar a invasores acesso \xe0 sua conta do Discord!',
      'color: red; font-size: large;',
    )
  }, [])

  return <div>{children}</div>
}
